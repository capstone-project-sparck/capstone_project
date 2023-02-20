"""
Structures the investors data to fit the database table.
"""
import pandas as pd
import os
import uuid

#importing of the data from csv
data_route = os.path.abspath(os.path.join(os.getcwd(), os.pardir)) + '/etl/Investors_full_list.csv'
investors_data = pd.read_csv(data_route, encoding='UTF-8')

#renaming of columns to remove spaces
investors_data.rename(columns={"Investor name": "investors_name"}, inplace=True)
investors_data.rename(columns={"Techstars companies invested": "Techstars_companies_invested"}, inplace=True)
investors_data.rename(columns={"Primary Investor Type": "Primary_Investor_Type"}, inplace=True)
investors_data.rename(columns={"Preferred Industry": "Preferred_Industry"}, inplace=True)
investors_data.rename(columns={"Preferred verticals": "Preferred_Verticals"}, inplace=True)
investors_data.rename(columns={"Preferred geography": "Preferred_Geography"}, inplace=True)
investors_data.rename(columns={"Preferred investment types": "Preferred_Investment_Types"}, inplace=True)
investors_data.rename(columns={"Preferred investment amount": "Preferred_Investment_Amount"}, inplace=True)
investors_data.rename(columns={"Primary contact": "Primary_Contact"}, inplace=True)
investors_data.rename(columns={"HQ Location": "HQ_Location"}, inplace=True)
investors_data.rename(columns={"Primary contact title": "Primary_Contact_Title"}, inplace=True)
investors_data.rename(columns={"Primary contact email": "Primary_Contact_Email"}, inplace=True)
investors_data.rename(columns={"Investor status": "Investor_Status"}, inplace=True)

#Creation of id column and readjusting of website column values
investors_data['Website'] = investors_data['Website'].map(lambda x: x if 'www.' in x else 'www.' + x)
investors_data = investors_data.drop("Connections", axis='columns')
investors_data['id'] = investors_data['Website'].map(lambda x: str(uuid.uuid3(uuid.NAMESPACE_URL, x)))

#droping of rows with duplicate id. Just in case becase this column will be a 
#primary key
investors_data = investors_data.drop_duplicates(subset=['id'])
