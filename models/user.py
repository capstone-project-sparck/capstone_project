from sqlalchemy import Column, ForeignKey
from sqlalchemy.sql.sqltypes import String
import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.getcwd(), os.pardir)) + '/config')
sys.path.append(os.path.abspath(os.path.join(os.getcwd(), os.pardir)))
from config.db import engine, base

class User(base):
  """User class"""
  __tablename__ = "Users"
  id = Column(String(255), primary_key=True)
  email = Column(String(50))
  hashedPassword = Column(String(255))

base.metadata.create_all(engine)
