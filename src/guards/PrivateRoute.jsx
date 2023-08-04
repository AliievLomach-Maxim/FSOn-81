import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
	const isAuth = true
	return isAuth ? children : <Navigate to='/login' />
}

export default PrivateRoute
