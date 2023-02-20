import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.getcwd(), os.pardir)) + '/config')
sys.path.append(os.path.abspath(os.path.join(os.getcwd(), os.pardir)) + '/etl')
sys.path.append(os.path.abspath(os.path.join(os.getcwd(), os.pardir)) + '/models')
sys.path.append(os.path.abspath(os.path.join(os.getcwd(), os.pardir)))
from config.db import session
import numpy as np
from models.user import User
from etl.users_data_structure import users_data

#Remove the nan records and create a dict with the investors data
user_data = users_data.replace(np.nan, 'empty')
users_to_dict = users_data.to_dict("records")

#Create and insert investor objects to the database
for row in users_to_dict:
    investor = User(**row)
    session.add(investor)
    session.commit()