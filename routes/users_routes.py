"""
Defines the CRUD for the investors in the API.
"""
import sys
import os

sys.path.append(os.path.abspath(os.path.join(os.getcwd(), os.pardir)) + '/config')
sys.path.append(os.path.abspath(os.path.join(os.getcwd(), os.pardir)) + '/models')
sys.path.append(os.path.abspath(os.path.join(os.getcwd(), os.pardir)) + '/schemas')

from fastapi import APIRouter, HTTPException
from config.db import session
from models.user import User as User_table
from schemas.users import User
from config.db import session
from typing import List

#API router to include the routes in the API object in app.py
user_consolidated = APIRouter()

#GET method to get all investors
@user_consolidated.get(
    "/users",
    tags=["users"],
    response_model=List[User],
    description="Get a list of all users",
)
def get_investors():
    return [row.__dict__ for row in session.query(User_table).order_by(User_table.id).all()]