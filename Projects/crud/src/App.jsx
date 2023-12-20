
import './App.css'
import Home from './Components/Home.jsx'
import Create from './Components/Create.jsx'
import Update from './Components/Update.jsx'
import {Routes,Route} from 'react-router-dom'
function App() {

  return (
		<Routes>
			<Route
				path='/'
				element={<Home />}
			/>
			<Route
				path='/Create'
				element={<Create />}
			/>
			<Route
				path='/Update'
				element={<Update />}
			/>
		</Routes>
	)
}

export default App
