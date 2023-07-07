import React from 'react'
import styled from './Container.module.css'
const Container = ({ children }) => {
	return (
		<div className={styled.container}>
			{/* <div className='container'> */}
			<div>{children}</div>
		</div>
	)
}

export default Container
