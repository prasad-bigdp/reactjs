import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () =>
{
  const [data,setData]=useState([])
  useEffect(() =>
  {
    try
    {
      axios.get('https://fakestoreapi.com/products').then((data) => setData(data.data));

    }
    catch (err)
    {
      alert(err);
    }
    finally
    {
      console.log("anyways executed")
    }
  },[])
  return (
		<div className='home'>
			<p>This is Home</p>
			<div className='products'>
				{data &&
          data.map((prod, index) => (
						<div
							key={index}
							className='product'>
							<img
								src={prod.image}
								alt={prod.title}
							/>
							<h4>{prod.title}</h4>
							<p>{prod.price}</p>
							<button><Link to={`product/${prod.title}?price=${prod.price}&image=${prod.image}`}>Details</Link></button>
						</div>
					))}
			</div>
		</div>
	)
}

export default Home
