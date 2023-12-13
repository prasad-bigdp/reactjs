import { useRef, useState } from "react"
import React from 'react'

const REg2 = () =>
{
    const nameref=useRef()
    const handle = () =>
    {
        console.log(nameref.current.value)
    }
  return (
      <div>
          <input type="text" ref={nameref} />
          {nameref.current['value']}
          <button onClick={handle}>Click</button>
    </div>
  )
}

export default REg2
