import sys
from uuid import uuid4
sys.path.append('/mnt/c/Users/User/Desktop/Holberton/capstone_project/etl')
sys.path.append('/mnt/c/Users/User/Desktop/Holberton/capstone_project/config')
from db import meta, engine, conn
import pandas as pd
import numpy as np
from investors_data_structuring import investors_data
from consolidate import consolidated

investors_data = investors_data.replace(np.nan, 'empty')

investors_to_dict = investors_data.to_dict("records")

# print(investors_to_dict[0])

for row in investors_to_dict:
    row['id'] = str(uuid4())
    conn.execute(consolidated.insert().values(row))
    conn.commit()


