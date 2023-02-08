import sys
import os

sys.path.append(os.path.abspath(os.path.join(os.getcwd(), os.pardir)) + '/config')
sys.path.append(os.path.abspath(os.path.join(os.getcwd(), os.pardir)) + '/models')
sys.path.append(os.path.abspath(os.path.join(os.getcwd(), os.pardir)) + '/schemas')

from fastapi import APIRouter, HTTPException
from config.db import conn
from models.consolidate import Consolidated
from schemas.investors import Investor
from uuid import uuid4
from config.db import session
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

    final_list = []
    for row in session.query(Consolidated).order_by(Consolidated.id).all():
        result_dict = row.__dict__
        result_dict["connections"] = [conn.__dict__ for conn in row.Connections]
        final_list.append(result_dict)
    return final_list

@investor_consolidated.post('/investors', status_code=201)
def post_investor(investor: Investor):
    new_investor_id = str(uuid4())
    new_investor = investor.dict()
    new_investor['id'] = new_investor_id
    conn.execute(consolidated.insert().values(new_investor))
    conn.commit()
    return conn.execute(consolidated.select().where(consolidated.c.id == new_investor_id)).first()._asdict()

@investor_consolidated.get(
    "/investors/{id}",
    tags=["investors"],
    response_model=Investor,
    description="Get a single investor by Id",
)
def get_investor(id: str):

    try:
        result = conn.execute(consolidated.select().where(consolidated.c.id == id)).first()._asdict()
    except AttributeError:
        raise HTTPException(status_code=404, detail="Investor not found")
    return result


@investor_consolidated.put(
    "/investors/{id}", tags=["investors"], response_model=Investor, description="Update an Investor by Id"
)
def update_investor(investor: Investor, id: str):
    conn.execute(
        consolidated.update()
        .values(
            **{k: v for k, v in investor.dict().items() if v != ""}
        )
        .where(consolidated.c.id == id)
    )
    consolidated.update()
    conn.commit()
    try:
        result = conn.execute(consolidated.select().where(consolidated.c.id == id)).first()._asdict()
    except AttributeError:
        raise HTTPException(status_code=404, detail="Investor not found")
    return result


@investor_consolidated.delete("/investors/{id}", tags=["investors"], status_code=HTTP_204_NO_CONTENT)
def delete_investors(id: str):
    conn.execute(consolidated.delete().where(consolidated.c.id == id))
    conn.commit()
    return "Investor deleted successfully"

