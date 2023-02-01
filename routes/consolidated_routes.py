import sys

sys.path.append('/mnt/c/Users/User/Desktop/Holberton/capstone_project/config')
sys.path.append('/mnt/c/Users/User/Desktop/Holberton/capstone_project/models')
sys.path.append('/mnt/c/Users/User/Desktop/Holberton/capstone_project/schemas')

from fastapi import APIRouter
from db import conn
from consolidate import consolidated
from investors import Investor
from uuid import uuid4
from starlette.status import HTTP_204_NO_CONTENT
from typing import List


investor_consolidated = APIRouter()

@investor_consolidated.get(
    "/investors",
    tags=["investors"],
    response_model=List[Investor],
    description="Get a list of all investors",
)
def get_investors():
    return [row._asdict() for row in conn.execute(consolidated.select()).fetchall()]

@investor_consolidated.post('/investors', status_code=201)
def post_investor(investor: Investor):
    new_investor = {
        "id": str(uuid4()),
        "investors_name": investor.investors_name,
        "Techstars_companies_invested": investor.Techstars_companies_invested,
        "Website": investor.Website,
        "Primary_Investor_Type": investor.Primary_Investor_Type,
        "Preferred_Investment_Types": investor.Preferred_Investment_Types,
        "Preferred_Industry": investor.Preferred_Industry,
        "Preferred_Verticals": investor.Preferred_Verticals,
        "Preferred_Geography": investor.Preferred_Geography,
        "Preferred_Investment_Amount": investor.Preferred_Investment_Amount,
        "Primary_Contact": investor.Primary_Contact,
        "Primary_Contact_Title": investor.Primary_Contact_Title,
        "Primary_Contact_Email": investor.Primary_Contact_Email,
        "HQ_Location": investor.HQ_Location,
        "Investor_Status": investor.Investor_Status,
        "Connections": investor.Connections
    }
    result = conn.execute(consolidated.insert().values(new_investor))
    conn.commit()
    return conn.execute(consolidated.select().where(consolidated.c.id == result.lastrowid)).first()._asdict()

@investor_consolidated.get(
    "/investors/{id}",
    tags=["investors"],
    response_model=Investor,
    description="Get a single investor by Id",
)
def get_investor(id: str):
    return conn.execute(consolidated.select().where(consolidated.c.id == id)).first()._asdict()

@investor_consolidated.put(
    "/investors/{id}", tags=["investors"], response_model=Investor, description="Update an Investor by Id"
)
def update_investor(investor: Investor, id: str):
    conn.execute(
        consolidated.update()
        .values(
            investors_name= investor.investors_name,
            Techstars_companies_invested= investor.Techstars_companies_invested,
            Website= investor.Website,
            Primary_Investor_Type= investor.Primary_Investor_Type,
            Preferred_Investment_Types= investor.Preferred_Investment_Types,
            Preferred_Industry= investor.Preferred_Industry,
            Preferred_Verticals= investor.Preferred_Verticals,
            Preferred_Geography= investor.Preferred_Geography,
            Preferred_Investment_Amount= investor.Preferred_Investment_Amount,
            Primary_Contact= investor.Primary_Contact,
            Primary_Contact_Title= investor.Primary_Contact_Title,
            Primary_Contact_Email= investor.Primary_Contact_Email,
            HQ_Location= investor.HQ_Location,
            Investor_Status= investor.Investor_Status,
            Connections= investor.Connections
        )
        .where(consolidated.c.id == id)
    )
    conn.commit()
    return conn.execute(consolidated.select().where(consolidated.c.id == id)).first()._asdict()


@investor_consolidated.delete("/investors/{id}", tags=["investors"], status_code=HTTP_204_NO_CONTENT)
def delete_investors(id: str):
    conn.execute(consolidated.delete().where(consolidated.c.id == id))
    conn.commit()
    return "Investor deleted successfully"

