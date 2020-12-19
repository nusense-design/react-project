import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
   getStyle = () => {
      return {
         borderBottom: "1px #ccc dotted",
         padding: "10 px ",
         margin: "3px",
         background: "#f4f4f4",
         textDecoration: this.props.todo.completed ? "line-through" : "none",
      };
   };

   render() {
      const { id, title } = this.props.todo;

      return (
         <div style={this.getStyle()}>
            <p>
               <input
                  type="checkbox"
                  onChange={this.props.markComplete.bind(this, id)}
               />
            {""} {title}{" "}

               <button
                  style={btnStyle}
                  onClick={this.props.deleteTodo.bind(this, id)}>
                  Delete{" "}
               </button>{" "}
            </p>{" "}
         </div>
      );
   }
}

//PropTypes
// eslint-disable-next-line react/no-typos
TodoItem.PropTypes = {
   todos: PropTypes.object.isRequired,
};

const btnStyle = {
   margin:"10px",
   background: "#ff0000",
   color: "#fff",
   border: "none",
   padding: "1.5px 3px",
   cursor: "pointer",
  float: "right",
};

export default TodoItem;
