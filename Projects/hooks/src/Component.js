import { useIncr } from "./App";
import React from 'react'

const Component = () =>
{
    const [inc]=useIncr('https://www.fakestoreapi.com')
  return (
    <div>
      {inc}
    </div>
  )
}

export default Component
