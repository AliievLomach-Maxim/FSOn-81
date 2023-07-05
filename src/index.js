import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'

import App from './App'

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<React.StrictMode></React.StrictMode>)

// const div = document.createElement('div')
// div.id = '123gfd'
// div.attr = '123'

// const paragraph = document.createElement('p')
// p.textContent = 'qwerty'
// p.id = 'qwe123'

// div.append(paragraph)

// const text = React.createElement('p', { id: 'qwe123', children: 'text' })
// const text = <p id='qwe123'>Text</p>

// // const div = React.createElement('div', {
// // 	id: 'qwe123',
// // 	attr: 'qwe',
// // 	className: 'some-Class',
// // 	children: text,
// // })

// const div = (
// 	<div id='qwe123' attr='qwe' className='class-some'>
// 		{text}
// 	</div>
// )

// console.log('div :>> ', div)

const root = document.getElementById('root')

ReactDOM.createRoot(root).render(<App />)
// ReactDOM.createRoot(root).render(ProductsList())
// root.append(div)
