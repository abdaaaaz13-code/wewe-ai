# WeWe AI API (starter)

This API currently returns a transparent demo response. It does not yet run an AI model.

Install and run:
```bash
python -m pip install -r requirements.txt
uvicorn main:app --host 0.0.0.0 --port 8000
```

Test:
```bash
curl -X POST http://127.0.0.1:8000/chat -H "Content-Type: application/json" -d "{\"message\":\"مرحبا\"}"
```

Before a public deployment, replace the open CORS policy with the exact web/app origins and add request limits.
