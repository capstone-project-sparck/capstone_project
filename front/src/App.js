import React from "react";
import Login from "./components/login";
import Table2 from "./components/table";
import Contact from "./components/Contact";
import About from "./components/About";
import Protected from "./components/protected";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./style/body.css"
import "./style/main.css"
import "./style/login.css"


export default function App(){

    /*let component1
    switch (window.location.pathname) {

        case "/":
            component1 = <Table2 />            
            break;
        case "/Sources":
            component1 = <Table2 />            
            break;
        
        case "/About":
            component1 = <About />            
            break;
                
        case "/Contact":
            component1 = <Contact />            
            break;

        default:
            break;
    }*/

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
                setLoginPass(oldValue=>!oldValue)
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
            <Route path="/Sources" element={<Table2 />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About" element={<About />} />
        </Route>
    </Routes>
  
    </BrowserRouter>
    
</>)
}