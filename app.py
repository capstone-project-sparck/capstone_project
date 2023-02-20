"""
Controller of the app. The main file which executes the app.
"""
from fastapi import FastAPI
from routes.consolidated_routes import investor_consolidated
from routes.connection_routes import connection_consolidated
from routes.users_routes import user_consolidated
from fastapi.middleware.cors import CORSMiddleware

# Creation of the FastAPI object
app = FastAPI()

# CORS adjustment
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# routes
app.include_router(investor_consolidated)
app.include_router(connection_consolidated)
app.include_router(user_consolidated)
