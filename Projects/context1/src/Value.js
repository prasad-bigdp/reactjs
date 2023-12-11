import React, { useContext } from 'react'
import { myContext } from './context'
const Value = () =>
{
  const {count,setCount,text}=useContext(myContext)
  return (
		<div
			style={{
				border: "2px solid red",
				height: "200px",
				width: "200px",
          }}>
          
           <p>{count}</p>
          <button onClick={() => setCount(count + 1)}>increase</button> 
          <p>{text}</p>
          <p>value.js</p>
            </div>
	)
}

export default Value
