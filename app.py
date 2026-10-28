from pathlib import Path
from flask import Flask, abort, send_from_directory

BASE_DIR = Path(__file__).resolve().parent
app = Flask(__name__)

@app.get("/")
def home():
    """Serve the existing portfolio design without changing its HTML/CSS."""
    return send_from_directory(BASE_DIR, "index.html")

@app.get("/<path:filename>")
def portfolio_assets(filename: str):
    """Serve portfolio assets such as images, stylesheets, scripts and documents."""
    target = (BASE_DIR / filename).resolve()
    if BASE_DIR not in target.parents or not target.is_file():
        abort(404)
    return send_from_directory(BASE_DIR, filename)

if __name__ == "__main__":
    # Local development only. For production, use a WSGI server such as gunicorn.
    app.run(host="127.0.0.1", port=5000, debug=True)
