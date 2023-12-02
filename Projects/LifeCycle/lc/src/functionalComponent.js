import React, { useEffect, useState } from 'react'

const FunctionalComponent = () =>
{
    const [data, setData] = useState([])
    const [msg,setMsg]=useState('')
    useEffect(() =>
    {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
        .then((data)=>setData(data))
    },[])

  return (
		<div>
          {
              data.map((val, index) => (
                  <div key={index}>
                      {val.title}
                      </div>
                  
              )
              
              )
            }
			{/* <button onClick={() => setData(data + 1)}>Data</button> <br />
			<button onClick={() => setMsg("hello")}>msg</button> */}
		</div>
	)
}

export default FunctionalComponent
