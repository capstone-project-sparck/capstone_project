from sqlalchemy import create_engine, MetaData

engine = create_engine("mysql+pymysql://spark:spark_dev@localhost:3306/techstars_db")

meta = MetaData()

meta.reflect(bind=engine)

conn = engine.connect()