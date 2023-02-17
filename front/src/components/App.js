import React from "react";
import Login from "./login";
import Filters from "./Filters";
import Contact from "./contact";
import Protected from "./protected";
import SingUp from "./SingUp";
import {BrowserRouter, Route, Routes} from "react-router-dom";

export default function App(){

  let [loginPass, setLoginPass] = React.useState(false)

  /*function LoginTest(){
      console.log(credentials)
      for(let elem of arrayPassword){
          if(elem.Username === credentials.Username &&
               elem.Password === credentials.Password)
          {
              setLoginPass(true)
              }
      }
  }*/
  
  let [credentials, setCredentials] = React.useState({})

  function getCredentials(event){
      setCredentials((oldValue)=>{
          return {...oldValue, [event.target.name]:event.target.value}
      }
      )
  }

  return(<>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login setLoginPass={setLoginPass} loginPass={loginPass} getCredentials={getCredentials} credentials={credentials}
        />} />
        <Route element={<Protected loginPass={loginPass}/>}>
            <Route path="/Sources" element={<Filters className="filters" setLoginPass={setLoginPass} />} />
            <Route path="/Contact" element={<Contact setLoginPass={setLoginPass} />} />
            {/*<Route path="/About" element={<About />} />*/}
        </Route>
        <Route path="/SingUp" element={ <SingUp getCredentials={getCredentials} credentials={credentials} 
        setLoginPass={setLoginPass} loginPass={loginPass}/> }/>
  </Routes>
  </BrowserRouter>
  </>)
}