import React from 'react'
import Layout from '../components/Layout'
import { useContext } from 'react'
import myContext from '../context/myContext'
const Home = () =>
{
  const data = useContext(myContext)
  return (
		<div>
			<Layout>
        <p>Home</p>
			</Layout>
		</div>
	)
}

export default Home
