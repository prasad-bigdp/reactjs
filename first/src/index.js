import React from 'react'
import ReactDOM from 'react-dom/client'
import Parent from './Parent'
import MovieList from './MovieList'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
	<MovieList />
	</React.StrictMode>,
)