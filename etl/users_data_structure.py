import pandas as pd
import os
import uuid

data_route = os.path.abspath(os.path.join(os.getcwd(), os.pardir)) + '/etl/Users_list.csv'

users_data = pd.read_csv(data_route, encoding='UTF-8')