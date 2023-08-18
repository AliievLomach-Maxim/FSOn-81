import { useDispatch, useSelector } from 'react-redux'
import Todo from '../components/Todo/Todo'
import { createTodo, deleteTodo, updateTodo } from '../store/todo/slice'

const ToDoPage = () => {
	const { todo } = useSelector((state) => state.todo)
	const dispatch = useDispatch()

	const handleDelete = (id) => {
		dispatch(deleteTodo(id))
	}
	const handleCreate = () => {
		dispatch(createTodo())
	}
	const handleUpdate = (id) => {
		dispatch(updateTodo(id))
	}
	return (
		<ul class='list-group mx-5'>
			{todo.map((todoItem) => (
				<Todo
					key={todoItem.id}
					todo={todoItem}
					createTodo={handleCreate}
					deleteTodo={handleDelete}
					updateTodo={handleUpdate}
				/>
			))}
		</ul>
	)
}

export default ToDoPage
