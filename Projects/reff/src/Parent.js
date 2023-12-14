import React,{useRef} from 'react'
import Child from './Child'

const Parent = () =>
{
    const inpref = useRef(null)
    const handleClick = () =>
    {
        console.log(inpref.current.value)
        inpref.current.focus()
    }
  return (
    <div>
          <p>Parent</p>
          
          <Child ref={inpref} />
          <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Parent
