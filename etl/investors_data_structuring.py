import pandas as pd


investors_data = pd.read_csv('/mnt/c/Users/User/Desktop/Holberton/capstone_project/etl/seed_data_investors_list.csv', encoding='UTF-8')


investors_data.rename(columns={"Investor name": "investors_name"}, inplace=True)
investors_data.rename(columns={"Techstars companies invested": "Techstars_companies_invested"}, inplace=True)
investors_data.rename(columns={"Primary Investor Type": "Primary_Investor_Type"}, inplace=True)
investors_data.rename(columns={"Preferred Industry": "Preferred_Industry"}, inplace=True)
investors_data.rename(columns={"Preferred Verticals": "Preferred_Verticals"}, inplace=True)
investors_data.rename(columns={"Preferred Geography": "Preferred_Geography"}, inplace=True)
investors_data.rename(columns={"Preferred Investment Types": "Preferred_Investment_Types"}, inplace=True)
investors_data.rename(columns={"Preferred Investment Amount (in millions)": "Preferred_Investment_Amount"}, inplace=True)
investors_data.rename(columns={"Primary Contact": "Primary_Contact"}, inplace=True)
investors_data.rename(columns={"Primary Contact Title": "Primary_Contact_Title"}, inplace=True)
investors_data.rename(columns={"Primary Contact Email": "Primary_Contact_Email"}, inplace=True)
investors_data.rename(columns={"HQ Location": "HQ_Location"}, inplace=True)
investors_data.rename(columns={"Investor Status": "Investor_Status"}, inplace=True)
investors_data.rename(columns={"Connections": "Connections"}, inplace=True)
