import { useSelector } from 'react-redux'
import { errorSelector } from '../../store/root/selectors'

const Error = () => {
	const error = useSelector(errorSelector)
	return error && <div>Error: {error}</div>
}

export default Error
