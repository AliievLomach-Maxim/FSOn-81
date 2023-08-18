import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementAction } from '../store/numberSlice/slice'
// import { incrementAction } from '../store/number/actions'

const HomePage = () => {
	const { number } = useSelector((state) => state.number)

	const dispatch = useDispatch()

	const handleClick = () => {
		dispatch(incrementAction(1))
	}
	const handleClick2 = () => {
		console.log('click')
		dispatch(incrementAction(10))
	}

	console.log('number :>> ', number)
	return (
		<>
			{number}
			<button onClick={handleClick}>click</button>
			<button onClick={handleClick2}>click</button>
		</>
	)
}

export default HomePage
