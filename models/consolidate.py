from sqlalchemy import Table, Column
from sqlalchemy.sql.sqltypes import String
import sys
sys.path.append('/mnt/c/Users/User/Desktop/Holberton/capstone_project/config')
sys.path.append('/mnt/c/Users/User/Desktop/Holberton/capstone_project/etl')
from db import meta, engine, conn
import pandas as pd
from investors_data_structuring import investors_data


consolidated = Table('consolidated', meta, 
                Column('investors_name', String(255)),
                Column('Techstars_companies_invested', String(2000)),
                Column('Website', String(255)),
                Column('Primary_Investor_Type', String(255)),
                Column('Preferred_Investment_Types', String(255)),
                Column('Preferred_Industry', String(2000)),
                Column('Preferred_Verticals', String(2000)),
                Column('Preferred_Geography', String(2000)),
                Column('Preferred_Investment_Amount', String(255)),
                Column('Primary_Contact', String(255)),
                Column('Primary_Contact_Title', String(255)),
                Column('Primary_Contact_Email', String(255)),
                Column('HQ_Location', String(255)),
                Column('Investor_Status', String(255)),
                Column('Connections', String(255)), extend_existing=True)

meta.create_all(engine)

conn.execute(consolidated.select()).fetchall()

table = meta.tables[ 'consolidated' ]

frame = investors_data.to_sql("consolidated", con=engine, if_exists='append', schema='techstars_db', index=False)

print(frame)