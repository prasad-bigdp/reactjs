import './App.css';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Account from './user.jsx';
import {Routes,Route,Link} from 'react-router-dom'
function App() {
  return (
		<div className='App'>
			<h1>My App</h1>
			<header>
				<ul className=''>
					<li>
						<Link to='/SignIn'>SignIn</Link>
					</li>
					<li>
						<Link to='/Signup'>SignUP</Link>
					</li>
				</ul>
			</header>
			<Routes>
				<Route
					path='/Signin'
					element={<SignIn />}
				/>
				<Route
					path='/SignUp'
					element={<SignUp />}
				/>
				<Route
					path='/Account'
					element={<Account />}
				/>
			</Routes>
		</div>
	)
}

export default App;
