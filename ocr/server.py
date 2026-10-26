"""Minimal Thai handwriting OCR service for the Thai practice widget.

Companion to the static site: loads a pretrained Thai handwriting model
(openthaigpt/thai-trocr) and exposes a single /predict endpoint. It runs
locally with docker compose, or on a small server behind a Cloudflare
Tunnel (see DEPLOY.md). The widget fails gracefully if it can't be reached.
"""

import base64
import binascii
import io
import os

from flask import Flask, jsonify, request
from PIL import Image
from transformers import TrOCRProcessor, VisionEncoderDecoderModel

MODEL_ID = "openthaigpt/thai-trocr"

# Sites allowed to call this service from a browser (comma-separated).
ALLOWED_ORIGINS = {
    origin.strip()
    for origin in os.environ.get(
        "ALLOWED_ORIGINS",
        "https://jordanckwan.party,http://localhost:8090,http://localhost:8123",
    ).split(",")
    if origin.strip()
}

# The drawing is a small canvas PNG, so anything bigger is not from the widget.
MAX_REQUEST_BYTES = 1024 * 1024
MAX_TARGET_CHARS = 40

app = Flask(__name__)
app.config["MAX_CONTENT_LENGTH"] = MAX_REQUEST_BYTES

print(f"Loading {MODEL_ID} (first run downloads weights, cached after that)...")
processor = TrOCRProcessor.from_pretrained(MODEL_ID)
model = VisionEncoderDecoderModel.from_pretrained(MODEL_ID)
model.eval()
print("Model loaded.")


@app.after_request
def add_cors_headers(response):
    origin = request.headers.get("Origin")
    if origin in ALLOWED_ORIGINS:
        response.headers["Access-Control-Allow-Origin"] = origin
        response.headers["Access-Control-Allow-Methods"] = "POST, OPTIONS"
        response.headers["Access-Control-Allow-Headers"] = "Content-Type"
        response.headers["Access-Control-Max-Age"] = "600"
        response.headers["Vary"] = "Origin"
    return response


@app.errorhandler(413)
def too_large(_err):
    return jsonify(error="image too large"), 413


@app.route("/predict", methods=["POST", "OPTIONS"])
def predict():
    if request.method == "OPTIONS":
        return "", 204

    data = request.get_json(silent=True) or {}
    target = str(data.get("target") or "").strip()[:MAX_TARGET_CHARS]
    image_data_url = str(data.get("image") or "")

    if "," in image_data_url:
        image_data_url = image_data_url.split(",", 1)[1]

    try:
        image_bytes = base64.b64decode(image_data_url, validate=True)
        image = Image.open(io.BytesIO(image_bytes)).convert("RGB")
    except (binascii.Error, ValueError, OSError):
        return jsonify(error="could not read the image"), 400

    pixel_values = processor(images=image, return_tensors="pt").pixel_values
    generated_ids = model.generate(pixel_values)
    predicted = processor.batch_decode(generated_ids, skip_special_tokens=True)[0].strip()

    return jsonify(
        predicted=predicted,
        target=target,
        match=bool(target) and predicted == target,
    )


@app.route("/health")
def health():
    return jsonify(status="ok")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))
