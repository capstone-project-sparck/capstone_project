from fastapi import FastAPI
from routes.consolidated_routes import investor_consolidated

app = FastAPI()

# routes

app.include_router(investor_consolidated)