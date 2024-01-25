import React from "react";
import { NavLink } from "react-router-dom";


function Navbar(){
    return(
        <nav>
        <ul>
            <NavLink to="/" className="custom-link">Home</NavLink>
            <NavLink to="/form" className="custom-link">Form</NavLink>
            <NavLink to="/about" className="custom-link">About</NavLink>
        </ul>
      </nav>
        
    )
}

export default Navbar;


// import React from "react";
// import { NavLink } from "react-router-dom";
// import "./styles.css"; // Make sure to import your CSS file

// function Navbar() {
//   return (
//     <nav>
//       <ul>
//         <NavLink to="/" className="custom-link">
//           Home
//         </NavLink>
//         <NavLink to="/form" className="custom-link">
//           Form
//         </NavLink>
//         <NavLink to="/about" className="custom-link">
//           About
//         </NavLink>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;


