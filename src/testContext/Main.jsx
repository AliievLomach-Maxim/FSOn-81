// import { useContext } from 'react'
// import { AlertContext } from './App'
import { useAlertContext } from './Context/AlertContext'

const Main = () => {
	const { setShowAlert } = useAlertContext()
	// const { setShowAlert } = useContext(AlertContext)
	return (
		<div>
			<h1>Hello Context</h1>
			<button
				className='btn btn-success'
				onClick={() => setShowAlert((prev) => !prev)}
			>
				Open Alert
			</button>
		</div>
	)
}

export default Main
