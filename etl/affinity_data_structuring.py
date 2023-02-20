"""
Structures the connections data to fit the database table.
"""
from investors_data_structuring import investors_data
import pandas as pd
import os
import uuid
from connections_tools import split_list, split_string, get_name, get_email

data_route = os.path.abspath(
    os.path.join(
        os.getcwd(),
        os.pardir)) + '/etl/Affinity_connections.csv'
connections_data = pd.read_csv(data_route, encoding='UTF-8')

# Rename of columns
connections_data.rename(
    columns={
        "Referral Name": "Referral_Name"},
    inplace=True)
connections_data.rename(
    columns={
        "People connected to investor": "People_connected_to_investor"},
    inplace=True)

# Creation of connections column
connections_data["Connections"] = connections_data["People_connected_to_investor"].str.split(
    '; ').map(split_list).map(lambda x: x[:20])

# Rearranging of data
connections_data_rearranged = connections_data[[
    'Name', 'Website', 'Referral_Name', 'Connections']].explode('Connections')
connections_data_rearranged['name'] = connections_data_rearranged['Connections'].map(
    get_name)
connections_data_rearranged['email'] = connections_data_rearranged['Connections'].map(
    get_email)
connections_data_rearranged['Website'] = connections_data_rearranged['Website'].map(
    lambda x: x if 'www.' in x else 'www.' + x)
connections_data_rearranged['investors_id'] = connections_data_rearranged['Website'].map(
    lambda x: str(uuid.uuid3(uuid.NAMESPACE_URL, x)))
connections_data_rearranged['id'] = connections_data_rearranged['investors_id'].map(
    lambda x: str(uuid.uuid4()))
connections_data_rearranged['type'] = "company"

# Getting referrals connections
referrals = connections_data_rearranged[[
    "Referral_Name", "investors_id"]].drop_duplicates(keep='first')
referrals["dict_name_email"] = referrals['Referral_Name'].map(split_string)
referrals["name"] = referrals["dict_name_email"].map(get_name)
referrals["email"] = referrals["dict_name_email"].map(get_email)
referrals["id"] = referrals["investors_id"].map(lambda x: str(uuid.uuid4()))
referrals = referrals[["id", "investors_id", "name", "email"]]
referrals["type"] = "referral"

# concatenate both tables: Company and Referral connections
connections_data_rearranged = connections_data_rearranged[[
    "id", "investors_id", "name", "email", "type"]]
connections_data_rearranged_final = connections_data_rearranged.append(
    referrals, ignore_index=True)
connections_data_rearranged_final = connections_data_rearranged_final[connections_data_rearranged_final['name'].astype(
    bool)]
connections_data_rearranged_final = connections_data_rearranged_final[connections_data_rearranged_final['investors_id'].isin(
    investors_data['id'])]


