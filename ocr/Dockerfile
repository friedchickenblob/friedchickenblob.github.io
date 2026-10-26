FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir --extra-index-url https://download.pytorch.org/whl/cpu -r requirements.txt

COPY . .

EXPOSE 5000

# One worker (the model is loaded once and is the memory hog); a few threads
# let a second request queue while one is being read. The long timeout covers
# the first request after the model has just loaded.
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "--workers", "1", "--threads", "2", "--timeout", "180", "server:app"]
