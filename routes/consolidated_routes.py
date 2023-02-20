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
from config.db import conn
from models.consolidate import Consolidated
from models.consolidate import Connection as Connection_table
from schemas.investors import Investor
from schemas.connections import Connection
import uuid 
from config.db import session
from starlette.status import HTTP_204_NO_CONTENT
from typing import List

#API router to include the routes in the API object in app.py
investor_consolidated = APIRouter()

#GET method to get all investors
@investor_consolidated.get(
    "/investors",
    tags=["investors"],
    response_model=List[Investor],
    description="Get a list of all investors",
)
def get_investors():

    return [{**row.__dict__, "Connections": [conn.__dict__ for conn in row.Connections]}
     for row in session.query(Consolidated).order_by(Consolidated.id).all()]
    
#POST method to create one investor    
@investor_consolidated.post('/investors', status_code=201)
def post_investor(investor: Investor):
    new_investor_id = str(uuid.uuid3(uuid.NAMESPACE_URL, investor.Website))
    new_investor = investor.dict()
    conns = new_investor["Connections"]
    del new_investor["Connections"]
    new_investor['id'] = new_investor_id
    
    conns_list = []
    for conn in conns:
        conn['id'] = str(str(uuid.uuid4()))
        conn['investors_id'] = new_investor_id
        conns_list.append(Connection_table(**conn))
    new_investor_obj = Consolidated(**new_investor)
    new_investor_obj.Connections = conns_list
    session.add(new_investor_obj)
    session.commit()
    return {**session.query(Consolidated).filter(Consolidated.id == new_investor_id)[0].__dict__, 
            "Connections": conns}

#GET method to obtain one investors with its id
@investor_consolidated.get(
    "/investors/{id}",
    tags=["investors"],
    response_model=Investor,
    description="Get a single investor by Id",
)
def get_investor(id: str):

    try:
        result = session.query(Consolidated).filter(Consolidated.id == id)[0]
        result_dict = result.__dict__
        result_dict["Connections"] = [conn.__dict__ for conn in result.Connections]
    except Exception:
        raise HTTPException(status_code=404, detail="Investor not found")
    return result_dict


#UPDATE method to modify one investor
@investor_consolidated.put(
    "/investors/{id}", tags=["investors"], response_model=Investor, description="Update an Investor by Id"
)
def update_investor(investor: Investor, id: str):
    
    dict_obj = {k: v for k, v in investor.dict().items() if v != ""}
    del dict_obj["Connections"]
    session.query(Consolidated).filter(Consolidated.id == id).\
    update(dict_obj, synchronize_session = False)
    session.commit()

    try:
        result = session.query(Consolidated).filter(Consolidated.id == id)[0]
        result_dict = result.__dict__
        result_dict["Connections"] = [conn.__dict__ for conn in result.Connections]
    except Exception:
        raise HTTPException(status_code=404, detail="Investor not found")
    return result_dict


#DELETE method to delete one investor based on its id
@investor_consolidated.delete("/investors/{id}", tags=["investors"], status_code=HTTP_204_NO_CONTENT)
def delete_investors(id: str):
    investor_obj = session.query(Consolidated).filter(Consolidated.id == id)[0]
    session.delete(investor_obj)

    conn_obj = session.query(Connection_table).filter(Connection_table.investors_id == id)
    for conn in conn_obj:
        session.delete(conn)
    session.commit()
    return "Investor deleted successfully"

