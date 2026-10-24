from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="WeWe AI API", version="0.1.0")

# Development convenience. Restrict this to your actual app/site origin before public deployment.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str

class ChatResponse(BaseModel):
    reply: str
    mode: str = "demo"

@app.get("/")
def root():
    return {"name": "WeWe AI API", "version": "0.1.0", "status": "starter"}

@app.get("/health")
def health():
    return {"ok": True}

@app.post("/chat", response_model=ChatResponse)
def chat(request: ChatRequest):
    message = request.message.strip()
    if not message:
        return ChatResponse(reply="اكتب رسالة أولًا.", mode="demo")
    # Intentionally transparent placeholder: connect the trained model here later.
    return ChatResponse(
        reply="وصلت رسالتك إلى خادم WeWe AI التجريبي. لم يتم ربط النموذج بعد.",
        mode="demo",
    )
