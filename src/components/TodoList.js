import React, { useState } from 'react';
import TodoItems from './TodoItems';
import './TodoList.css';
import TodoForm from './NewTodo/TodoForm';
import { getTodoItems } from './services/todoService';

const TodoList = () => {
	const [todos, setTodos] = useState(getTodoItems());

	const saveTodoDataHandler = (enteredTodoData) => {
		const newTodos = [...todos, enteredTodoData];
    newTodos.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    })
    setTodos(newTodos);
		console.log('todos:', todos);
    
	};

	const handleDelete = (item) => {
		const newTodos = todos.filter((t) => t.id !== item.id);
		setTodos(newTodos);
	};
	const completeHandler = (item) => {
		const updatedTodos = [...todos];
		updatedTodos[item].completed = !updatedTodos[item].completed;
		setTodos(updatedTodos);
	};

	

	return (
		<div className='container'>
			<div className='row'>
				<div className='col'>
					<div>
						<div className='todo-list'>
							<TodoForm onSaveTodoData={saveTodoDataHandler} />
						</div>

						<div className='todo-list'>
							<TodoItems
								todos={todos}
								handleDelete={handleDelete}
								completeHandler={completeHandler}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TodoList;
