
import './App.css'
import Values from './Values'
import {useState} from 'react'

const App = () =>
{
  const val = 123;
  const [myVal,setmyVal]= useState('')
 const x= function ale (data)
  {
    alert("hello world " + data)
    setmyVal(data)
return "prasad"
 }
 
  
  return (
    <div className='parent'>
      <Values message={val} greeting="hi" fun={ale} fun2={ale} />
      {myVal && <p>I'm from child {myVal}</p>}
      {x}
    </div>
)
 
}

export default App
