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


investors_data = investors_data.replace(np.nan, 'empty')
investors_to_dict = investors_data.to_dict("records")


for row in investors_to_dict:
    investor = Consolidated(**row)
    session.add(investor)
    session.commit()

