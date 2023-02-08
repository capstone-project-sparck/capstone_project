from sqlalchemy import Column, ForeignKey
from sqlalchemy.sql.sqltypes import String
import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.getcwd(), os.pardir)) + '/config')
sys.path.append(os.path.abspath(os.path.join(os.getcwd(), os.pardir)))
from config.db import engine, base
from sqlalchemy.orm import relationship


class Consolidated(base):
  """Class for table Consolidated"""
  __tablename__ = "consolidated"
  id = Column(String(255), primary_key=True)
  investors_name = Column(String(255))
  Techstars_companies_invested = Column(String(2000))
  Website = Column(String(255))
  Primary_Investor_Type = Column(String(255))
  Preferred_Investment_Types = Column(String(255))
  Preferred_Industry = Column(String(2000))
  Preferred_Verticals = Column(String(2000))
  Preferred_Geography = Column(String(2000))
  Preferred_Investment_Amount = Column(String(255))
  Primary_Contact = Column(String(255))
  Primary_Contact_Title = Column(String(255))
  Primary_Contact_Email = Column(String(255))
  HQ_Location = Column(String(255))
  Investor_Status = Column(String(255))
  Connections = relationship('Connection', backref="connections")

class Connection(base):
  """Class for table Connection"""
  __tablename__ = "connections"
  id = Column(String(255), nullable=False, primary_key=True)
  investors_id = Column(String(255), ForeignKey("consolidated.id"))
  name = Column(String(255))
  email = Column(String(255))
  type = Column(String(255))

#Create the tables in the database
base.metadata.create_all(engine)