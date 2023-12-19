
import './App.css'
import {Route,Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/projects'
import Contact from './components/Contact'
import Header from './components/Header'
import Counter from './components/Counter'
import Todo from './components/Todo'
import Product from './components/Product'
import NotFound from './components/NotFound'
  function App ()
  {

  return (
		<>
			<p>Main App</p>
			<Header />

			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/home'
					element={<Home />}
				/>
				<Route
					path='/about'
					element={<About />}>
					<Route
						path='counter'
						element={<Counter />}
					/>
					<Route
						path='Todo'
						element={<Todo />}
					/>
			  </Route>
			  <Route path='/product/:name' element={<Product />} />
				<Route
					path='/contact'
					element={<Contact />}
				/>
				<Route
					path='/Projects'
					element={<Projects />}
			  />
			  <Route path='*' element={<NotFound />} />
			</Routes>
		</>
	)
}

export default App
