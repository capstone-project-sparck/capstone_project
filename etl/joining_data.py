import pandas as pd
from affinity_data_structuring import affinity_data
from investors_data_structuring import investors_data

consolidated_data = investors_data.join(affinity_data, on="")