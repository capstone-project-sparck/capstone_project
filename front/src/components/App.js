import React from "react";
import Login from "./login";
import Filters from "./Filters";
import Contact from "./contact";
import Protected from "./protected";
import {BrowserRouter, Route, Routes} from "react-router-dom";

export default function App(){

  let [loginPass, setLoginPass] = React.useState(false)
    
  const arrayPassword = [{
      Username:"alejandroG", Password:"testpass"
  }]

  function LoginTest(){
      console.log(credentials)
      for(let elem of arrayPassword){
          if(elem.Username === credentials.Username &&
               elem.Password === credentials.Password)
          {
              setLoginPass(true)
              }
      }
  }
  
  let [credentials, setCredentials] = React.useState({})

  function getCredentials(event){
      setCredentials((oldValue)=>{
          console.log(credentials)
          return {...oldValue, [event.target.name]:event.target.value}
      }
      )
  }

  return(<>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login loginPass={loginPass} LoginTest={LoginTest} 
        getCredentials={getCredentials} credentials={credentials}
        />} />
        <Route element={<Protected loginPass={loginPass}/>}>
            <Route path="/Sources" element={<Filters className="filters" setLoginPass={setLoginPass} />} />
            <Route path="/Contact" element={<Contact setLoginPass={setLoginPass} />} />
            {/*<Route path="/About" element={<About />} />*/}
        </Route>
  </Routes>
  </BrowserRouter>
  </>)
}