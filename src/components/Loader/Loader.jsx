import { useSelector } from 'react-redux'
import { loadingSelector } from '../../store/root/selectors'

const Loader = () => {
	const isLoading = useSelector(loadingSelector)
	return isLoading && <div>Loader........</div>
}

export default Loader
