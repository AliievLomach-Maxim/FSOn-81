import { useDispatch, useSelector } from 'react-redux'
import Todo from '../components/Todo/Todo'
import { createTodo, deleteTodo, updateTodo } from '../store/todo/slice'
import { useEffect } from 'react'
import { getAllTodoThunk } from '../store/todo/thunks'

const ToDoPage = () => {
	const { todo, isLoading, error } = useSelector((state) => state.todo)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getAllTodoThunk())
	}, [dispatch])

	// const handleDelete = (id) => {
	// 	dispatch(deleteTodo(id))
	// }
	// const handleCreate = () => {
	// 	dispatch(createTodo())
	// }
	// const handleUpdate = (id) => {
	// 	dispatch(updateTodo(id))
	// }
	return (
		<>
			{isLoading && <h1>Loading...</h1>}
			{error && <h1>{error}</h1>}
			{todo && (
				<ul class='list-group mx-5'>
					{todo.map((todoItem) => (
						<Todo
							key={todoItem.id}
							todo={todoItem}
							// createTodo={handleCreate}
							// deleteTodo={handleDelete}
							// updateTodo={handleUpdate}
						/>
					))}
				</ul>
			)}{' '}
		</>
	)
}

export default ToDoPage
