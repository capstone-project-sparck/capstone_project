import { Navigate } from "react-router-dom";
import React from "react";


export default function Login(props){
    const imgUrl="https://cdn.brandfolder.io/70W92OEX/as/q0vc05-3hg50o-8p4uw5/logo-dark.png"


    return(<div className="mainLogin" >
    <div className="logins">
        <div className="Logo">
            <img src={imgUrl} alt="techstarsLogo" />
            <h1>minimun text goes here</h1>
        </div>
        <div className="inputs">
            <label htmlFor="username">
                Username<input type="text" name="Username" onChange={(e)=>props.getCredentials(e)} />
            </label>
            <label htmlFor="username">
                Password<input type="password" name="Password" onChange={(e)=>props.getCredentials(e)}/>
            </label>
        </div>
        <div className="buttons">
            <button name="login" onClick={()=>props.LoginTest()}>{!props.loginPass?"Enter":<Navigate to ="/Sources"/>}</button>
            <button name="clear">Clear</button>
        </div>
    </div>
    <div className="backSquare"></div>
    </div>)

}