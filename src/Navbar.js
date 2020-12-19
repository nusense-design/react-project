import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
   //style
   const navStyle = {
      color: "white",
   };

   return (
      <div className="App">
         <nav className="navbar">
            <h3>LOGO</h3>
            <ul>
               <Link style={navStyle} to="/">
                  <li>Home</li>
               </Link>
               <Link style={navStyle} to="/task">
                  <li>Task</li>
               </Link>
               <Link style={navStyle} to="/user">
                  <li>User</li>
               </Link>
            </ul>
         </nav>
      </div>
   );
}

export default Navbar;
