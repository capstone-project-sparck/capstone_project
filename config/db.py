from sqlalchemy import create_engine, MetaData
import yaml
from yaml.loader import SafeLoader

with open('settings.yaml', "r") as f:
    params = yaml.safe_load(f)

conn_route = f"mysql+pymysql://{params['user']}:{params['password']}@{params['host']}:{params['port']}/{params['db']}"
engine = create_engine(conn_route)
meta = MetaData()
meta.reflect(bind=engine)
conn = engine.connect()