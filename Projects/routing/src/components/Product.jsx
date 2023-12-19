import React,{useState} from 'react'
import { useParams,useLocation, useNavigate } from 'react-router-dom'

const Product = () =>
{
    const [login,setLogin]=useState(false)
    let params = useParams();
    let location = useLocation();
    let qparams = new URLSearchParams(location.search)
    let price = qparams.get('price')
    let image = qparams.get('image')
    let history = useNavigate();
    const handleClick = () =>
    {
        if (login) 
        {
            history('/home')
        } 
        else
        {
            history('/login')
       }       
    }
  return (
		<div className='prodpage'>
			<img
				src={image}
				alt={params.title}
			/>

			<p>I'm, Product of {params.name}</p>
          <p>Price:{price}</p>
          <button onClick={handleClick}>Checkout</button>
		</div>
	)
}

export default Product
