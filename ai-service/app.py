from fastapi import FastAPI
from pydantic import BaseModel

# FastAPI app
app = FastAPI()

# Input model
class TextInput(BaseModel):
    text: str

# Simple test route
@app.get("/")
def home():
    return {"message": "AI Service is running"}

# Process route (fake summary + tags for now)
@app.post("/process")
def process_text(input: TextInput):
    summary = "This is a short summary of your text."
    tags = ["tag1", "tag2", "tag3"]
    return {"summary": summary, "tags": tags}
