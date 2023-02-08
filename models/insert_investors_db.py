import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.getcwd(), os.pardir)) + '/config')
sys.path.append(os.path.abspath(os.path.join(os.getcwd(), os.pardir)) + '/etl')
sys.path.append(os.path.abspath(os.path.join(os.getcwd(), os.pardir)) + '/models')
sys.path.append(os.path.abspath(os.path.join(os.getcwd(), os.pardir)))
from config.db import session
import numpy as np
from etl.investors_data_structuring import investors_data
from models.consolidate import Consolidated

#Remove the nan records and create a dict with the investors data
investors_data = investors_data.replace(np.nan, 'empty')
investors_to_dict = investors_data.to_dict("records")

#Create and insert investor objects to the database
for row in investors_to_dict:
    investor = Consolidated(**row)
    session.add(investor)
    session.commit()

