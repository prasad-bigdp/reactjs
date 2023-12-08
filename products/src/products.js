import React, { useState,useEffect } from 'react'

const Products = () =>
{
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)
    const [cartItems, setCartItems] = useState([])
    const [cartValue, setCartValue] = useState(0)
    const [loading,setloading]=useState(true)
    
    useEffect(() =>
    {
        try
        {
			fetch("https://fakestoreapi.com/products")
				.then((response) => response.json())
				.then((data) => setProducts(data))
            setloading(false)
        }
        catch (err)
        {
            setloading(true);
            console.log(err)
        }
    

    }, [])
    const addCart = (prod) =>
    {
        const data = [...cartItems, prod]
		setCartItems(data)
        const value = data.reduce((prev, current) => prev + current.price, 0)
        setCartValue(value)
        console.log(value)
        setCount(count + 1)
    }

    return (
			<div className=' '>
				{loading && <p>Loading.............</p>}
				<div>
					<header className=' flex flex-row justify-between border border-black'>
						<img
							src='https://st2.depositphotos.com/4035913/6124/i/450/depositphotos_61243733-stock-illustration-business-company-logo.jpg'
							alt='logo'
							className=' h-20 w-35 mx-auto'
						/>
						<p className=' text-xl'>Cart:{count}</p>
						<p>
							cartItems:
							{cartItems.map((prod) => (
								<li key={prod.id}>{prod.title}</li>
							))}
						</p>
						<p className=' text-blue-500'>cartValue:{cartValue}</p>
					</header>
					<ul className='cardContainer grid grid-cols-3 gap-5'>
						{products.map((prod, index) => (
							<li
								key={index}
								className=' container border rounded-2xl flex flex-col justify-center align-items-center'>
								<div className='card text-center'>
									<img
										src={prod.image}
										alt={prod.title}
										height='100'
										width='100'
									/>
									<h2 className=' text-xxl-center '> {prod.title}</h2>
									<p className=' text-xl-center'>Price:{prod.price}</p>
									<p className=' text-black'>Rating:{prod.rating.rate}/5.0</p>
									<button
										type='button'
										className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
										onClick={() => addCart(prod)}>
										Buy
									</button>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		)
}

export default Products
