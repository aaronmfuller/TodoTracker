import React, { useState } from 'react';
import TodoDate from './TodoDate';
import './TodoItem.css';

import 'bootstrap/dist/css/bootstrap.css';

const TodoItems = (props) => {
	const [todos, setTodos] = useState(props.todos);

	const handleDelete = (item) => {
		// console.log(item);
		// console.log('handle delete called...');
    const newTodos = todos.filter((t) => t.id !== item.id);
		setTodos(newTodos);
	};

	return (
		<table className='table table-striped'>
			<thead className='d-flex'></thead>
			  <tbody>
				{todos.map((item) => (
					<tr key={item.id}>
						<td>
							<div className='todo-item__description'>
								<TodoDate date={item.date} />

								<h2>{item.task}</h2>
								<button
									onClick={() => handleDelete(item)}
									className='btn btn-danger btn-sm p-2 flex-shrink-1'
								>
									Delete
								</button>
							</div>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default TodoItems;
