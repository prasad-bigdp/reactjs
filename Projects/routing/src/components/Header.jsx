import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
		<div className=' header flex bg-black'>
			<div>
				<img
					src='https://st2.depositphotos.com/4035913/6124/i/450/depositphotos_61243733-stock-illustration-business-company-logo.jpg'
					alt='logo image'
					className='logo h-6 w-28'
					height='100'
					width='200'
				/>
			</div>

			<div className='menu'>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
					<li>
						<Link to='/projects'>Projects</Link>
					</li>
					<li>
						<Link to='/contact'>Contact</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Header
