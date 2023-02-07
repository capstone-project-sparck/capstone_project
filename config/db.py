from sqlalchemy import create_engine
from yaml.loader import SafeLoader
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import yaml

with open('settings.yaml', "r") as f:
    params = yaml.safe_load(f)

conn_route = f"mysql+pymysql://{params['user']}:{params['password']}@{params['host']}:{params['port']}/{params['db']}"
engine = create_engine(conn_route)
Session = sessionmaker(bind=engine)
session = Session()
base = declarative_base()
conn = engine.connect()