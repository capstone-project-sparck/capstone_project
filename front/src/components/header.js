import React from "react";
import { Link } from "react-router-dom";

export default function HeaderApp(){
    const imgUrl="https://cdn.brandfolder.io/70W92OEX/as/q0vc05-3hg50o-8p4uw5/logo-dark.png"

    return(<>
    <div className="header1">
        <img src={imgUrl} alt="logo" />
        <nav className="navBar">
        <ul>
            <li>
                <Link to={`/Sources`} className="linkFirst">sources</Link>
            </li>
                
            <li>
                <Link to={`/About`} className="linkFirst">About Us</Link>
            </li>
            <li><Link to={`/Contact`} className="linkFirst">Contact</Link>
            </li>
        </ul>
        </nav>
    </div>
    </>)
}
