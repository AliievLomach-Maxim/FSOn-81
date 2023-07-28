// import { useContext } from 'react'
// import { AlertContext } from './App'
import { useAlertContext } from './Context/AlertContext'

const Alert = () => {
	// const { showAlert } = useContext(AlertContext)
	const { showAlert } = useAlertContext()

	return showAlert && <div className='alert alert-danger'>Messaaaaaggee</div>
}

export default Alert
