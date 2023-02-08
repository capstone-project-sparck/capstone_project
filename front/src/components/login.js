import { Navigate } from "react-router-dom";
import React from "react";


export default function Login(){
    const imgUrl="https://cdn.brandfolder.io/70W92OEX/as/q0vc05-3hg50o-8p4uw5/logo-dark.png"

    let [loginPass, setLoginPass] = React.useState(false)
    let [credentials, setCredentials] = React.useState({})

    function getCredentials(event){
        setCredentials((oldValue)=>{
            console.log(credentials)
            return {...oldValue, [event.target.name]:event.target.value}
        }
        )
    }

    const arrayPassword = [{
        Username:"alejandroG", Password:"testpass"
    }]
    //console.log(arrayPassword)
    function LoginTest(){
        console.log(credentials)
        for(let elem of arrayPassword){
            if(elem.Username === credentials.Username && elem.Password === credentials.Password){
                setLoginPass(oldValue=>!oldValue)
                }
        }
    }

    return(<div className="mainLogin" >
    <div className="logins">
        <div className="Logo">
            <img src={imgUrl} alt="techstarsLogo" />
            <h1>minimun text goes here</h1>
        </div>
        <div className="inputs">
            <label htmlFor="username">
                Username<input type="text" name="Username" onChange={getCredentials} />
            </label>
            <label htmlFor="username">
                Password<input type="password" name="Password" onChange={getCredentials}/>
            </label>
        </div>
        <div className="buttons">
            <button name="login" onClick={LoginTest}>{!loginPass?"Enter":<Navigate to ="/Sources"/>}</button>
            <button name="clear">Clear</button>
        </div>
    </div>
    <div className="backSquare"></div>
    </div>)

}