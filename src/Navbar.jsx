import React from "react";
import { NavLink } from "react-router-dom";


function Navbar(){
    return(
        <nav>
        <ul>
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/form" >Form</NavLink>
            <NavLink to="/about" >About</NavLink>
        </ul>
      </nav>
        
    )
}

export default Navbar;


//REPLACE HREF TAGS