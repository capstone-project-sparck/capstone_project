import React from "react";
import HeaderApp from "./header";
import Behind from "./behind";

export default function About(){
    return(<>
        <div className="tableView">
        <div className="frontCover">
          
        <HeaderApp />
        
        <h1 className="">About us</h1>
        <p>@Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut 
        laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud</p>
        <Behind />
        </div>
        <div className="backCover"></div> 
        </div>
        </>)
}