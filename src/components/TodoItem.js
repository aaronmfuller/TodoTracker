import React from 'react';
import "./TodoItem.css";
import TodoDate from './TodoDate';


//Todo for this component: figure out date syntax and handling, so that "TodoDate" can be
//plugged into the "TodoItem" component

const TodoItem = (props) => {
    return (
      <div className="todo-item">
        
        <TodoDate date={props.dueBy} />
        <div className="todo-item__description">
          <h2>{props.task}</h2>
          <h2>{props.date}</h2>
          <button onClick={todo => props.onDelete(todo)}
        className="btn btn-danger  btn-sm">Delete</button>
        </div>
      </div>
    );
  };
 
export default TodoItem;