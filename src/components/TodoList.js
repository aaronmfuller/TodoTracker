import React, { useState } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";
import TodoForm from "./NewTodo/TodoForm";
import { getTodoItems } from "./services/todoService";

const TodoList = () => {

const [todos, setTodos] = useState(getTodoItems());

const saveTodoDataHandler = (enteredTodoData) => {
    const todoData = {todos, ...enteredTodoData};
    console.log(todoData);
    setTodos(todoData);
};

  return (
    <ul>
      <div>
        <div className="todo-list">
          <TodoForm 
          onSaveTodoData={saveTodoDataHandler}
          />
        </div>
        <div className="todo-list">
          <TodoItems
          todos={todos}
           />
        </div>
      </div>
    </ul>
  );
};

export default TodoList;
