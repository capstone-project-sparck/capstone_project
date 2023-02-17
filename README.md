# Application for Visualization and Filtering of Investors and Connections for Techstars

![Contributors](https://img.shields.io/github/contributors/capstone-project-sparck/capstone_project?style=plastic)
![Forks](https://img.shields.io/github/forks/capstone-project-sparck/capstone_project)
![Stars](https://img.shields.io/github/stars/capstone-project-sparck/capstone_project)
![Licence](https://img.shields.io/github/license/capstone-project-sparck/capstone_project)
![Issues](https://img.shields.io/github/issues/capstone-project-sparck/capstone_project)
![Languages](https://img.shields.io/github/languages/count/capstone-project-sparck/capstone_project)

## Description

The current project was developed with the intention of an easy way for the users of the start up Techstars to filter and find 
investors from the database of Pitchbook and their connection from Affinity in order to contact them. The data is being stored in a MySql database and its deployed through an fastAPI API. A React frontend is used to show the data in a table and to filter it. 

We used MySql for the database for its simplicity and because we did not have a very complex data model. We found that FastAPI was the best technology for creating the API we needed for its easy maintenance and scalability. Finally, we found that React was the best fit for the frontend for its easy connection with an API. 

We had some challenges using the Affinity API because the data of connections we needed was not available with it. We hope to solve this challenge in the future and add this feature so the data are updated. 

## Diagrams and Flow Chart

![higher_level](https://user-images.githubusercontent.com/22607461/218857148-9e2e8025-ff18-408a-b8f7-93c5c3cd9825.jpeg)
![medium-level](https://user-images.githubusercontent.com/22607461/218857302-9073a781-60f7-4f6c-88a0-07846c71f6af.jpeg)
![diagrama_de_archivos](https://user-images.githubusercontent.com/22607461/219759319-dee60c42-4da5-49e4-bd45-e5d98e29acde.jpeg)

### Files

#### Backend

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

#### Frontend

| File  | Directory  | Description |
| :------ |:--------------| :---------------------|
| `index.html` | public | Base HTML file of the DOM. |
| `App.js` | src | Controller file for the components. |
| `index.js` | src | Creates all the react components based on id in HTML. |
| `table.js` | src | File that contains the table and the filters. |
| `/components` | src | Directory that contains the individual components. |
| `/style` | src  | Directory that contains the CSS files and pictures. |

## How to Install and Run the Project

In order to install and run the project, you first need to clone the repository. Then, you need to create a Python Virtual Environment with the command `venv <name of the environment>`. Activate the virtual environment with the command `source <name of the environment>/bin/activate`. Then you need to install the requirements with the command `pip install -r requirements.txt`. Finally you need to get inside the front directoy and install the react dependencies with the command `npm install`.

Once you have installed all the dependencies, you need to create the database and the user executing the file `set_up.sql` with the command `cat database/setup_mysql.sql | mysql`. Then you need to create the tables with the command `python models/consolidate.py`. Finally, you need to insert the data executing the following commands in order, `python models/insert_investors_db.py` and then `python models/insert_connections.py`. This process has to be done only the first time you are installing the project.

You first need to get into the home directoy and run the command `uvicorn app:app` to run the API. Finally, get inside the front directory in another terminal and run the command `npm start` to run the front. 

## How to Use the Project

![ezgif com-video-to-gif (1)](https://user-images.githubusercontent.com/22607461/218871199-b585a3ef-2151-4596-a468-52bf5c69d68a.gif)

## Authors

<a href = 'https://www.github.com'> <img width = '32px' align= 'center' src="https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/github.svg"/></a> [@Alejandro García](https://github.com/alejandrodgz) | [@Juan Esteban Hernandez](https://github.com/Jehp00) | [@Juan David Otálora](https://github.com/otalorajuand)

<a href = 'https://www.twitter.com'> <img width = '32px' align= 'center' src="https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/twitter.svg"/></a> [@Alejandro García](https://twitter.com/dagarciaz?t=SsP1iYjxXsK7z9nBZxwSvQ&s=08) | [@Juan Esteban Hernandez](https://twitter.com/0110Juanes?t=zVQP_NQVayj4JzjPc0OdQQ&s=09) | [@Juan David Otálora](https://twitter.com/juandotalora)

<a href = 'https://www.linkedin.com'> <img width = '32px' align= 'center' src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"/></a> [@Alejandro García](https://www.linkedin.com/in/daniel-garcia-aa987b233/) | [@Juan Esteban Hernandez](https://www.linkedin.com/in/juan-esteban-hernandez-pedraza-254b71234) | [@Juan David Otálora](https://www.linkedin.com/in/juan-david-ot%C3%A1lora-carrillo-7a6599172/)
