import React from 'react'

const Todo = ({ todo, createTodo, deleteTodo, updateTodo }) => {
	return (
		<div>
			<li className='list-group-item d-flex justify-content-between'>
				{todo.title}
				<div className='form-check form-switch'>
					<input
						className='form-check-input'
						type='checkbox'
						role='switch'
						id='flexSwitchCheckChecked'
						checked={todo.completed}
						onChange={() => updateTodo(todo.id)}
					/>
					<label
						className='form-check-label'
						htmlFor='flexSwitchCheckChecked'
					>
						Completed
					</label>
					<button
						onClick={() => deleteTodo(todo.id)}
						type='button'
						class='btn-close ms-4'
						aria-label='Close'
					></button>
				</div>
			</li>
		</div>
	)
}

export default Todo
