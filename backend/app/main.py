from fastapi import FastAPI
from app.api.api import simulate_router
from fastapi.middleware.cors import CORSMiddleware
from app.middleware.cors import add_cors_middleware

app = FastAPI()

# Configure CORS
add_cors_middleware(app)

# Include API routers
app.include_router(simulate_router)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)