"""
Creates the connection to the database.
"""
from sqlalchemy import create_engine
from yaml.loader import SafeLoader
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import yaml

# Open parameters file to load global variables
with open('settings.yaml', "r") as f:
    params = yaml.safe_load(f)

#Create the connection with the database
conn_route = f"mysql+pymysql://{params['user']}:{params['password']}@{params['host']}:{params['port']}/{params['db']}"
engine = create_engine(conn_route, pool_pre_ping=True)
Session = sessionmaker(bind=engine)
session = Session()
base = declarative_base()
conn = engine.connect()