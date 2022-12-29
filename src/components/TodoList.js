import React from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";
import TodoForm from "./NewTodo/TodoForm";

const TodoList = () => {
  return (
    <ul>
      <div>
        <div className="todo-list">
          <TodoForm />
        </div>
        <div className="todo-list">
          <TodoItems />
        </div>
      </div>
    </ul>
  );
};

export default TodoList;
