import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.getcwd(), os.pardir)) + '/config')
sys.path.append(os.path.abspath(os.path.join(os.getcwd(), os.pardir)) + '/etl')
sys.path.append(os.path.abspath(os.path.join(os.getcwd(), os.pardir)) + '/models')
sys.path.append(os.path.abspath(os.path.join(os.getcwd(), os.pardir)))
from config.db import session
import numpy as np
from etl.affinity_data_structuring import connections_data_rearranged_final
from models.consolidate import Connection

#Remove the nan records and create a dict with the connection data
connections_data = connections_data_rearranged_final.replace(np.nan, 'empty')
connections_to_dict = connections_data.to_dict("records")

#Create and insert connection objects to the database
for row in connections_to_dict:
    connection = Connection(**row)
    session.add(connection)
    session.commit()