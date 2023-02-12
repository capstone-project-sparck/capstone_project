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

## How to install and run the project

In order to install and run the project, you first need to clone the repository. Then, you need to create a Python Virtual Environment with the command `venv <name of the environment>`. Then you need to install the requirements with the command `pip install -r requirements.txt`. Finally you need to get inside the front directoy and install the react dependencies with the command `npm install`.

You first need to get into the home directoy and run the command `uvicorn app:app` to run the API. Finally, get inside the front directory and run the command `npm start` to run the front. 