// import ProductsList from './components/ProductsList/ProductsList'
import Header from './components/Header/Header'
import Modal from './components/Modal/Modal'

import { useState } from 'react'

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
			{/* <ProductsList /> */}
			{/* <Counter /> */}
			{isShowModal && <Modal close={toggleModal}>MODAL</Modal>}
		</div>
	)
}

export default App

// class App extends Component {
// state = {
// 	isShowModal: false,
// }
// 	toggleModal = () => {
// this.setState((prev) => ({ isShowModal: !prev.isShowModal }))
// 	}

// 	render() {
// 		return (
// 			<div className='container'>
// 				<Header open={this.toggleModal} />
// 				<ProductsList />
// 				{this.state.isShowModal && (
// 					<Modal close={this.toggleModal}>MODAL</Modal>
// 				)}
// 			</div>
// 		)
// 	}
// }
// export default App
