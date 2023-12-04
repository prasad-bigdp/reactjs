import React, { useState,useEffect } from 'react'

const Products = () =>
{
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)
    const [cartItems, setCartItems] = useState([])
    const [cartValue,setCartValue]=useState(0)
    
    useEffect(() =>
    {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => setProducts(data))
        console.log("use effect")

    }, [])
    const addCart = (prod) =>
    {
        console.log(prod)
        const data=products.filter((pro) => pro.id === prod.id)
        const value = cartItems.reduce((prev, current) => prev + current.price, cartValue)
        setCartValue(value)
        console.log(value)
        setCartItems(data);
        setCount(count + 1)
    }

  return (
		<div>
			<header className='header'>
				<img
					src='https://st2.depositphotos.com/4035913/6124/i/450/depositphotos_61243733-stock-illustration-business-company-logo.jpg'
					alt='logo'
              />
              <p>Cart:{count}</p>
              <p>cartItems:{
                  cartItems.map((prod) => (
                      <li key={prod.id}>{prod.title}</li>
                  ))
              }</p>
              <p>cartValue:{cartValue}</p>
			</header>
			<ul className='cardContainer'>
				{products.map((prod, index) => (
					<li key={index}>
						<div className='card'>
							<img
								src={prod.image}
								alt={prod.title}
							/>
							<h2> {prod.title}</h2>
							<p>Price:{prod.price}</p>
							<p>Rating:{prod.rating.rate}/5.0</p>
							<button onClick={()=>addCart(prod)}>Buy</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Products
