import React from "react";
import { Link } from "react-router-dom";

function User() {
   return (
      <div className="user">
         <form>
            <h1>Login/Signup</h1>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="email" name="email" />
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="password" name="email" />
            <input type="submit" value="Submit" className="submit" />
            {/* <p><a href="./Signup">click to Sign-In</a></p> */}
            <Link to="/signup">
               <p>
                  <a href="./">SignUp</a>
               </p>
            </Link>
         </form>
      </div>
   );
}

export default User;
