import ProductsList from './components/ProductsList/ProductsList'
import Header from './components/Header/Header'
import Modal from './components/Modal/Modal'

import { useState } from 'react'
// import TestUseMemo from './components/TestUseMemo/TestUseMemo'

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
			{/* <Counter /> */}
			{/* <TestUseMemo /> */}
			{isShowModal && <Modal close={toggleModal}>MODAL</Modal>}
		</div>
	)
}

export default App
