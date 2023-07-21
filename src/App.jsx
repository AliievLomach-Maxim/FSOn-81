import ProductsList from './components/ProductsList/ProductsList'
import Header from './components/Header/Header'
import Modal from './components/Modal/Modal'
import { Component } from 'react'

class App extends Component {
	state = {
		isShowModal: false,
	}
	toggleModal = () => {
		this.setState((prev) => ({ isShowModal: !prev.isShowModal }))
	}

	render() {
		return (
			<div className='container'>
				<Header open={this.toggleModal} />
				<ProductsList />
				{this.state.isShowModal && (
					<Modal close={this.toggleModal}>MODAL</Modal>
				)}
			</div>
		)
	}
}

// if (showModal){
// 	return Modal()
// }
// const App = () => {
// 	return (
// 		<div className='container'>
// 			<Header />
// 			<Counter />
// 			<Modal>MODAL</Modal>
// 		</div>
// 	)
// }

export default App
