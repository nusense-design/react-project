import React, { Component } from "react";
import TodoItem from "./TodoItem";
import propTypes from "prop-types";

class Todo extends Component {
   render() {
      return this.props.todos.map((todo) => (
         <TodoItem
            key={todo.id}
            markComplete={this.props.markComplete}
            deleteTodo={this.props.deleteTodo}
            todo={todo}
         />
      ));
   }
}


Todo.propTypes = {
   todos: propTypes.array.isRequired,
};

export default Todo;
