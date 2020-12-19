import React from "react";

function Header() {
   return (
      <header style={headerStyle}>
         <h1>Machine-Test-Nimap</h1>
      </header>
   );
}

const headerStyle = {
   background: "rgba(26, 26, 26, 0.875)",
   color: "#fff",
   textAlign: "center",
   padding: "10px",
};

export default Header;
