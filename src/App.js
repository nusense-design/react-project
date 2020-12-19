import React, { useState, useEffect } from "react";
import "./style/App.scss";
import Navbar from "./Navbar";
import Task from "./Task";
import User from "./User";
import SignUp from './SignUp';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
   return (
      <Router>
         <div className="App">
            <Navbar />
            <Switch>
               <Route path="/" exact component={Home} />
               <Route path="/task" component={Task} />
               <Route path="/user" component={User} />
               <Route path="/signup" component={SignUp} />
            </Switch>
         </div>
      </Router>
   );
}


function Home() {
  const [resourceType, setResourceType] = useState("item1");

   const lists = [
      "lorem",
      "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
   ];
   useEffect(() => {
      console.log("render");
   }, [resourceType]);

   return (
      <div className="home">
         <h1>Home Page</h1>

         <div className="btn">
            <button onClick={() => setResourceType("item1")} value="item1">
               list - 1
            </button>
            <button onClick={() => setResourceType("item2")} value="item2">
               list - 2
            </button>
            <button onClick={() => setResourceType("item3")} value="item3">
               list - 3
            </button>
         </div>
         <div className="text">
            <h3>{resourceType}</h3>
            <p>
               {lists.map((list) => {
                  return <em>{list}</em>;
               })}
            </p>
         </div>
      </div>
   );
}

export default App;
