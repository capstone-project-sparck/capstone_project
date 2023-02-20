"""
Defines the schema for an investors object for the API.
"""
from pydantic import BaseModel
from typing import Optional

class User(BaseModel):
    """Schema for a Investor"""
    id: Optional[str] = ""
    email: Optional[str] = ""
    hashedPassword: Optional[str] = ""