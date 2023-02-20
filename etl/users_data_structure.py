import pandas as pd
import os
import uuid

data_route = os.path.abspath(os.path.join(os.getcwd(), os.pardir)) + '/etl/Users_list.xlsx'

users_data = pd.read_excel(data_route)

users_data["id"] = users_data['email'].map(lambda x: uuid.uuid4())