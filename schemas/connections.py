"""
Defines the schema for an connections object for the API.
"""
from pydantic import BaseModel
from typing import Optional

class Connection(BaseModel):
    """Schema for a Connection"""
    id: Optional[str] = ""
    investors_id: Optional[str] = ""
    name: Optional[str] = ""
    email: Optional[str] = ""
    type: Optional[str] = ""