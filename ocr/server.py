"""Minimal Thai handwriting OCR service for the Thai practice widget.

Local-only companion to the static site: loads a pretrained Thai
handwriting model (openthaigpt/thai-trocr) and exposes a single
/predict endpoint. Not deployed anywhere ~ the site's practice widget
just fails gracefully if this isn't running.
"""

import base64
import io
import os

from flask import Flask, jsonify, request
from PIL import Image
from transformers import TrOCRProcessor, VisionEncoderDecoderModel

MODEL_ID = "openthaigpt/thai-trocr"

app = Flask(__name__)

print(f"Loading {MODEL_ID} (first run downloads weights, cached after that)...")
processor = TrOCRProcessor.from_pretrained(MODEL_ID)
model = VisionEncoderDecoderModel.from_pretrained(MODEL_ID)
print("Model loaded.")


@app.after_request
def add_cors_headers(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Methods"] = "POST, OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "Content-Type"
    return response


@app.route("/predict", methods=["POST", "OPTIONS"])
def predict():
    if request.method == "OPTIONS":
        return "", 204

    data = request.get_json(force=True)
    target = (data.get("target") or "").strip()
    image_data_url = data.get("image", "")

    if "," in image_data_url:
        image_data_url = image_data_url.split(",", 1)[1]

    image_bytes = base64.b64decode(image_data_url)
    image = Image.open(io.BytesIO(image_bytes)).convert("RGB")

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
