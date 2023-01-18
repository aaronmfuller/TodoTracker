import React from 'react';
import TodoDate from './TodoDate';
import './TodoItem.css';
import 'bootstrap/dist/css/bootstrap.css';

const TodoItems = (props) => {
	return (
		<table className='table table-striped'>
			<thead className='d-flex'></thead>
			<tbody>
				{props.todos.map((item, index) => (
					<tr key={item.id}>
						<td>
							<div className='todo-item__description d-flex'>
								<TodoDate date={item.date} />

								<h2
									className='flex-grow-1'
									style={{
										textDecoration: item.completed ? 'line-through' : 'none',
									}}
								>
									{item.task}
								</h2>
								<div className='col-1 d-flex'>
									<button
										onClick={() => props.handleDelete(item)}
										className='btn btn-danger btn-sm p-2 d-flex'
									>
										Delete
									</button>
								</div>
								<div className='form-check col-2 d-flex'>
									<input
										className='form-check-input'
										type='checkbox'
										checked={item.completed}
										key='item.id'
										onChange={() => props.completeHandler(index)}									/>
									<label
										className='form-check-label'
										form='flexCheckDefault'
									>
										Completed
									</label>
								</div>
							</div>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default TodoItems;
