import React, { useState } from "react"
import { FaSearch } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa"
import logo from '../assets/logo.png'


const Navabar = () => {
	const [mode, setMode] = useState("light")
	const toogleMode = () => {
		if (mode === "light") {
			setMode("dark")
			document.body.style.backgroundColor = "black"
		} else {
			setMode("dark")
			document.body.style.backgroundColor = "white"
		}
	}

	return (
		<div className='flex justify-between items-center bg-black text-white px-10 py-3'>
			<div className='image'>
				<img
					src={logo}
					alt='image'
					className='h-20 w-50'
				/>
			</div>
			<div className='search flex justify-between items-center gap-5 bg-black text-white'>
				<input
					type='search'
					className=' h-10 rounded-sm outline '
					name=''
					id=''
				/>
				<FaSearch className=' ' />
			</div>
			<div className='menu'>
				<ul className='flex justify-between items-center gap-5  bg-black text-white'>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/products'>Products</Link>
					</li>
					<li>
						<Link to='/contact'>contact</Link>
					</li>
				</ul>
			</div>
			<div className='h-button flex justify-between items-center gap-10 bg-black text-white'>
				<FaShoppingCart />
				<button>Login</button>
			</div>
		</div>
	)
}

export default Navabar
