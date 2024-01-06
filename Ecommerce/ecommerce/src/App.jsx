import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Order from './pages/Order'
import NoPage from './pages/NoPage'
import Cart from './pages/Cart'
import Dashboard from './pages/Admin/dashboard'
import myContext from './context/myContext'
import Contact from './pages/Contact'
import Allproducts from './pages/Allproducts'
const App = () =>
{
	 const details = {
			name:{ name1:"prasad",name2:"raj"},
			Phno: 2525252,
	 }

	return (
		<myContext.Provider value={details}>
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='/order'
						element={<Order />}
					/>
					<Route
						path='/products'
						element={<Allproducts />}
					/>
					<Route
						path='/cart'
						element={<Cart />}
					/>
					<Route
						path='/dashboard'
						element={<Dashboard />}
					/>
					<Route
						path='/contact'
						element={<Contact />}
					/>

					<Route
						path='/*'
						element={<NoPage />}
					/>
				</Routes>
			</BrowserRouter>
		</myContext.Provider>
	)
}

export default App
