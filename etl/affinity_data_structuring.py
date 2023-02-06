import pandas as pd
import os
import uuid

data_route = os.path.abspath(os.path.join(os.getcwd(), os.pardir)) + '/etl/Affinity_connections.csv'
connections_data = pd.read_csv(data_route, encoding='UTF-8')

connections_data.rename(columns={"Referral Name": "Referral_Name"}, inplace=True)
connections_data.rename(columns={"People connected to investor": "People_connected_to_investor"}, inplace=True)

connections_data["connections_list"] = connections_data["People_connected_to_investor"].str.split('; ')

def split_list(list_1):
    
    result = []
    if type(list_1) is list:
        for elem in list_1:
            elem_dict = {}

            try:
                name = elem.split(' <')[0]
                email = elem.split(' <')[1]
            except Exception:
                continue
            elem_dict['name'] = name
            elem_dict['email'] = email
            result.append(elem_dict)
    return result

def get_name(dict_1):
    try:
        result = dict_1['name']
    except Exception:
        return ''
    return result

def get_email(dict_1):
    try:
        result = dict_1['email']
    except Exception:
        return ''
    return result


connections_data['Connections'] = connections_data["connections_list"].map(split_list)

connections_data_rearranged = connections_data[['Name', 'Website', 'Referral_Name', 'Connections']].explode('Connections')
connections_data_rearranged['name'] = connections_data_rearranged['Connections'].map(get_name)
connections_data_rearranged['email'] = connections_data_rearranged['Connections'].map(get_email)
connections_data_rearranged['investor_id'] = connections_data_rearranged['Website'].map(lambda x: uuid.uuid3(uuid.NAMESPACE_URL, x))
connections_data_rearranged['id'] = connections_data_rearranged['investor_id'].map(lambda x: str(uuid.uuid4()))

connections_data_rearranged.to_csv('datos_conexion.csv')