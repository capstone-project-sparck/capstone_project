"""
Defines the schema for an investors object for the API.
"""
from pydantic import BaseModel
from typing import Optional

class Investor(BaseModel):
    """Schema for a Investor"""
    id: Optional[str] = ""
    investors_name: Optional[str] = ""
    Techstars_companies_invested: Optional[str] = ""
    Website: str = ""
    Primary_Investor_Type: Optional[str] = ""
    Preferred_Investment_Types: Optional[str] = ""
    Preferred_Industry: Optional[str] = ""
    Preferred_Verticals: Optional[str] = ""
    Preferred_Geography: Optional[str] = ""
    Preferred_Investment_Amount: Optional[str] = ""
    Primary_Contact: Optional[str] = ""
    Primary_Contact_Title: Optional[str] = ""
    Primary_Contact_Email: Optional[str] = ""
    HQ_Location: Optional[str] = ""
    Investor_Status: Optional[str] = ""
    Connections: Optional[list] = []

