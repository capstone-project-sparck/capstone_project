import React from "react";
import Login from "./components/login";
import Table2 from "./components/table";
import Contact from "./components/Contact";
import About from "./components/About";
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
    
    return(<>
    
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Sources" element={<Table2 />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />    
    </Routes>
  
    </BrowserRouter>
    
</>)
}