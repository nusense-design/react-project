import React from "react";

function SignUp() {
   return (
      <div className="SignUp">
         <form>
            <h1>Signup</h1>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="email" name="email" />
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="password" name="password" />
            <label htmlFor="reEnterPassword">ReEnter Password</label>
            <input type="password" placeholder="re enter" name="reEnterPassword" />
            <input type="submit" value="Submit" className="submit" />
            
         </form>
      </div>
   );
}

export default SignUp;
