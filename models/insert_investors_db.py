import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.getcwd(), os.pardir)) + '/config')
sys.path.append(os.path.abspath(os.path.join(os.getcwd(), os.pardir)) + '/etl')
sys.path.append(os.path.abspath(os.path.join(os.getcwd(), os.pardir)))
from uuid import uuid4
from config.db import conn
import numpy as np
from etl.investors_data_structuring import investors_data
from consolidate import consolidated

investors_data = investors_data.replace(np.nan, 'empty')
investors_to_dict = investors_data.to_dict("records")

for row in investors_to_dict:
    row['id'] = str(uuid4())
    conn.execute(consolidated.insert().values(row))
    conn.commit()


