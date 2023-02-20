"""
Defines the CRUD for the connections in the API.
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
connection_consolidated = APIRouter()

#GET method to get all connections
@connection_consolidated.get(
    "/connections",
    tags=["connections"],
    response_model=List[Connection],
    description="Get a list of all connections",
)
def get_connections():

    return [row.__dict__ for row in session.query(Connection_table).order_by(Connection_table.id).all()]
    

#GET method to obtain one connection with its id
@connection_consolidated.get(
    "/connections/{id}",
    tags=["connections"],
    response_model=Connection,
    description="Get a single connection by Id",
)
def get_connections(id: str):

    try:
        result = session.query(Connection_table).filter(Connection_table.id == id)[0].__dict__
    except Exception:
        raise HTTPException(status_code=404, detail="Connection not found")
    return result


#UPDATE method to modify one connection
@connection_consolidated.put(
    "/connections/{id}",
    tags=["connections"], 
    response_model=Connection, 
    description="Update an Connection by Id"
)
def update_connection(connection: Connection, id: str):
    
    dict_obj = {k: v for k, v in connection.dict().items() if v != ""}
    session.query(Connection_table).filter(Connection_table.id == id).\
    update(dict_obj, synchronize_session = False)
    session.commit()

    try:
        result = session.query(Consolidated).filter(Consolidated.id == id)[0].__dict__
    except Exception:
        raise HTTPException(status_code=404, detail="Investor not found")
    return result


#DELETE method to delete one connection based on its id
@connection_consolidated.delete("/connections/{id}", tags=["connections"], status_code=HTTP_204_NO_CONTENT)
def delete_connection(id: str):
    conn_obj = session.query(Connection_table).filter(Connection_table.investors_id == id)
    session.delete(conn_obj)
    session.commit()
    return "Connection deleted successfully"

