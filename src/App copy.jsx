import { useState } from 'react'
import ProductsList from './components/ProductsList/ProductsList'
import Header from './components/Header/Header'
import Modal from './components/Modal/Modal'
import Counter from './components/Counter/Counter'

const App = () => {
	const [isShowModal, setIsShowModal] = useState(false)

	const toggleModal = () => {
		setIsShowModal((prev) => {
			return !prev
		})
	}

	return (
		<div className='container'>
			<Header open={toggleModal} />
			<ProductsList />
			<Counter />
			{isShowModal && <Modal close={toggleModal}>MODAL</Modal>}
		</div>
	)
}

export default App
