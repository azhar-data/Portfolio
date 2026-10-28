# Run the Portfolio with Python (Flask)

This branch adds a Python/Flask server for the existing portfolio. It keeps the current `index.html` and its design in place rather than rewriting the browser UI in Python (web browsers still use HTML/CSS/JavaScript for presentation).

## Requirements

- Python 3.10 or newer
- Git

## Run locally on Windows (VS Code)

```powershell
python -m venv .venv
.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
python app.py
```

Open http://127.0.0.1:5000 in your browser. Stop the server with Ctrl+C.

If PowerShell blocks activation, run the install command with the environment's Python directly:

```powershell
.venv\Scripts\python.exe -m pip install -r requirements.txt
.venv\Scripts\python.exe app.py
```

## Deploy

A WSGI server is included in requirements. On a hosting provider that supports Python, use:

```bash
gunicorn app:app
```

Set the provider's Python runtime/build command as appropriate. GitHub Pages only hosts static sites and does not run Flask; keep the current GitHub Pages deployment for the static site, or deploy this Flask branch to a Python-capable host.

## Notes

- The original portfolio HTML and assets are preserved.
- This adds a Python backend/server; it does not automatically rewrite HTML/CSS/JavaScript into Python.
