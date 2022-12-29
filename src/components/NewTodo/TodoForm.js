import React, { useState } from "react";

import "./TodoForm.css";

const TodoForm = (props) => {
  const [enteredTask, setEnteredTask] = useState("");
  const [enteredDate, setEnteredDate] = useState("");


  const taskChangeHandler = (event) => {
    setEnteredTask(event.target.value);
  
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const todoData = {
      task: enteredTask,
      date: new Date(enteredDate)
    };

    props.onSaveTodoData(todoData);
    setEnteredTask("");
    setEnteredDate("");
  };


  return (
    <form onSubmit={submitHandler}>
      <div className="new-todo__controls">
        <div className="new-todo__control">
          <label>Task</label>
          <input
            type="text"
            value={enteredTask}
            onChange={taskChangeHandler}
          />
        </div>
       
        <div className="new-todo__control">
          <label>Due Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-todo__actions">
        <button type="button" onClick={props.stopEditingHandler}>Cancel</button>
        <button type="submit">Add Todo Item</button>
      </div>
    </form>
  );
};

export default TodoForm;
