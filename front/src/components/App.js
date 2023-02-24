import React from "react";
import Login from "./login";
import SignUp from "./SignUp"
import Filters from "./Filters";
import Contact from "./Contact";
import Protected from "./protected";
import Connections from "./Connections";
import {BrowserRouter, Route, Routes} from "react-router-dom";


export default function App(){

  //states to test login and credentials

  let [loginPass, setLoginPass] = React.useState(false)
  let [credentials, setCredentials] = React.useState({})

  //this function is use to set the email and password

  function getCredentials(event){
      setCredentials((oldValue)=>{
          return {...oldValue, [event.target.name]:event.target.value}
      }
      )
  }

  return(<>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login setLoginPass={setLoginPass} loginPass={loginPass} 
        getCredentials={getCredentials} credentials={credentials}
        />} />
        <Route path="/SignUp" element={ <SignUp getCredentials={getCredentials} credentials={credentials} 
        setLoginPass={setLoginPass} loginPass={loginPass}/> }/>
        <Route element={<Protected loginPass={loginPass}/>}>
            <Route path="/Sources" element={<Filters className="filters" setLoginPass={setLoginPass} />} />
            <Route path="/Contact" element={<Contact setLoginPass={setLoginPass} />} />
            <Route path="/Connections" element={<Connections setLoginPass={setLoginPass} />} />
            {/*<Route path="/About" element={<About />} />*/}
        </Route>
  </Routes>
  </BrowserRouter>
  </>)}