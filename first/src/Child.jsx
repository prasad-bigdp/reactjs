import React from 'react'

const Child = (props) => {
  return (
    <div>
          <h2>Hello World {props.name}</h2>
          <p>My value is {props.value}</p>
    </div>
  )
}


export default Child
