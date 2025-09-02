# main.py
from fastapi import FastAPI

app = FastAPI()  # <-- this name must match what you run with uvicorn

@app.get("/")
def read_root():
    return {"message": "Hello World"}
