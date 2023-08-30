import { getAllUsers } from '../api/auth'

const HomePage = () => {
	getAllUsers()
	return <>HomePage</>
}

export default HomePage
