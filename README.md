# Application for Visualization and Filtering of Investors and Connections Techstars

![Contributors](https://img.shields.io/github/contributors/capstone-project-sparck/capstone_project?style=plastic)
![Forks](https://img.shields.io/github/forks/capstone-project-sparck/capstone_project)
![Stars](https://img.shields.io/github/stars/capstone-project-sparck/capstone_project)
![Licence](https://img.shields.io/github/license/capstone-project-sparck/capstone_project)
![Issues](https://img.shields.io/github/issues/capstone-project-sparck/capstone_project)
![Languages](https://img.shields.io/github/languages/count/capstone-project-sparck/capstone_project)

## Description

The current project was developed with the intention of an easy way for the users of the start up Techstars to filter and find 
investors from the database of Pitchbook and their connection from Affinity in order to contact them. The data is being stored in a MySql data base and its deployed through an fastAPI API. A React frontend is used to show the data in a table and to filter it. 

We used MySql for the database for its simplicity and because we did not have a very complex data model. We found that FastAPI was the best technology for creating the API we needed for its easy maintenance and scalability. Finally, we found that React was the best fit for the frontend for its easy connection with an API. 

We had some challenges using the Affinity API because the data of connections we needed was not available with it. We hope to solve this challenge in the future and add this feature so the data are updated. 

## Diagrams

![diagrama_alto_nivel](https://user-images.githubusercontent.com/22607461/218613094-3271e7c6-4f2c-4a68-b13c-b16547a0f6f3.jpeg)
![diagrama_nivel_medio](https://user-images.githubusercontent.com/22607461/218613173-c0cca9f0-cb12-4a54-a940-793b8d3e9bf1.jpeg)

### Files

| File  | Directory  | Description |
| :------ |:--------------| :---------------------|
| `app.py` | home | Controller of the app. The main file which executes the app. |
| `db.py`  | config  | Creates the connection to the database. |
| `setup_mysql.sql` | database   | Creates the database and the user. |
| `affinity_data_structuring.py` | etl | Structures the connections data to fit the database table. |
| `investors_data_structuring.py` | etl | Structures the investors data to fit the database table. |
| `consolidate.py` | models | Creates the investors and connections tables in SQLAlchemy. |
| `insert_investors_db.py` | models | Inserts the investors data into the database. |
| `insert_connections.py` | models | Inserts the connections data into the database. |
| `consolidated_routes.py` | routes  | Defines the CRUD for the investors in the API. |
| `connection_routes.py` | routes |  Defines the CRUD for the connections in the API. |
| `investors.py` | schemas  | Defines the schema for an investors object for the API. |
| `connections.py` | schemas | Defines the schema for an connections object for the API. |

## How to install and run the project

In order to install and run the project, you first need to clone the repository. Then, you need to create a Python Virtual Environment with the command `venv <name of the environment>`. Then you need to install the requirements with the command `pip install -r requirements.txt`. Finally you need to get inside the front directoy and install the react dependencies with the command `npm install`.

You first need to get into the home directoy and run the command `uvicorn app:app` to run the API. Finally, get inside the front directory and run the command `npm start` to run the front. 

## How to Use the Project

## Authors

<a href = 'https://www.github.com/Crisgrva'> <img width = '32px' align= 'center' src="https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/github.svg"/></a> [@Alejandro García](https://github.com/Caballero018) | [@Juan Esteban Hernandez](https://github.com/otalorajuand) | [@Juan David Otálora](https://github.com/otalorajuand)

<a href = 'https://www.twitter.com/crisgrvc'> <img width = '32px' align= 'center' src="https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/twitter.svg"/></a> [@Alejandro García](https://twitter.com/Alejand51178128) | [@Juan Esteban Hernandez](https://twitter.com/juandotalora) | [@Juan David Otálora](https://twitter.com/juandotalora)