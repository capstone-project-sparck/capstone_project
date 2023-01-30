from requests.auth import HTTPBasicAuth
import requests
import json
import pandas as pd


url = 'https://api.affinity.co/lists/174702/list-entries'
headers = {'Accept': 'application/json'}
auth = HTTPBasicAuth('apikey', 'sNfUyAVoccdhv9_cHoq9kG9chhQ0EbvyqKMDIEqus3A')

req = requests.get(url, headers=headers, auth=auth)
data = json.loads(req.content)
affinity_data = pd.DataFrame.from_records(data)