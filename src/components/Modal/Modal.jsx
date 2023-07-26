import React, { useEffect } from 'react'

const Modal = ({ children, close }) => {
	useEffect(() => {
		const handleEsc = ({ code }) => {
			if (code === 'Escape') close()
			console.log('esc')
		}
		document.addEventListener('keydown', handleEsc)
		return () => document.removeEventListener('keydown', handleEsc)
	}, [close])

	return (
		<div
			className='modal fade show'
			style={{ display: 'block', backdropFilter: 'blur(5px)' }}
		>
			<div className='modal-dialog'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h5 className='modal-title'> Modal</h5>
						<button
							type='button'
							className='btn-close'
							aria-label='Close'
							onClick={close}
						></button>
					</div>
					<div className='modal-body'>{children}</div>
				</div>
			</div>
		</div>
	)
}

export default Modal

// import { Component } from 'react'

// class Modal extends Component {
// 	componentDidMount() {
// 		console.log('Mount Modal')
// 		document.addEventListener('keydown', this.handleEsc)
// 	}

// 	componentWillUnmount() {
// 		document.removeEventListener('keydown', this.handleEsc)
// 	}

// 	handleEsc = ({ code }) => {
// 		if (code === 'Escape') this.props.close()
// 		console.log('esc')
// 	}

// 	render() {
// 		const { children, close } = this.props
// 		return (
// 			<div
// 				className='modal fade show'
// 				style={{ display: 'block', backdropFilter: 'blur(5px)' }}
// 			>
// 				<div className='modal-dialog'>
// 					<div className='modal-content'>
// 						<div className='modal-header'>
// 							<h5 className='modal-title'> Modal</h5>
// 							<button
// 								type='button'
// 								className='btn-close'
// 								aria-label='Close'
// 								onClick={close}
// 							></button>
// 						</div>
// 						<div className='modal-body'>{children}</div>
// 					</div>
// 				</div>
// 			</div>
// 		)
// 	}
// }
