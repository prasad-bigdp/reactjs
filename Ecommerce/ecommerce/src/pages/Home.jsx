import React, { useEffect,useState } from 'react'
import Layout from '../components/Layout'
import { useContext } from 'react'
import myContext from '../context/myContext'
import axios from 'axios'
const Home = () =>
{
	const [products, setProducts] = useState([])
	
	useEffect(() =>
	{
		try
		{
		axios.get("https://fakestoreapi.com/products") 
		.then((res)=>setProducts(res.data))

		}
		catch(err)
		{
             console.log("error"+err)
		}
	},[])
  return (
		<div>
			<Layout>
				<div className=' grid grid-cols-3  p-20'>
					{console.log(products)}
					{products &&
						products.map((prod, index) => (
							<div
								key={index}
								className=' max-w-sm rounded overflow-hidden shadow-lg p-5 m-3 hover:scale-105 transition-all duration-200 flex flex-col justify-center items-center gap-3'>
								<div className=' h- 75 w-75'>
									<img
										src={prod.image}
										alt={prod.title}
										className='w-full'
									/>
								</div>
								<h3>{prod.title}</h3>
								<p>{prod.price}</p>
								<p>Rating:{prod.rating.rate}/5.0</p>
								<button>Add to Cart</button>
							</div>
						))}
				</div>
			</Layout>
		</div>
	)
}

export default Home
