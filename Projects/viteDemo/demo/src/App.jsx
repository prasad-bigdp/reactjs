
import './App.css'
import Values from './Values'
import {useState} from 'react'
import MyChild from './myChild.jsx'
const App = () =>
{
  const val = 123;
  const [myVal,setmyVal]= useState('')
function ale (data)
  {
    alert("hello world " + data)
    setmyVal(data)
return "prasad"
 }
 
  
  return (
    <div className='parent'>
      <h1>I'm Parent</h1>
      <Values message={val} greeting="hi" fun={ale} fun2={ale} /> 
      
      {myVal && <p>I'm from child {myVal}</p>}
      <MyChild>
        <h2>hiii</h2>
        <button>Click parent</button>
      </MyChild>
      <MyChild>
        <h1>Hello child</h1>
     </MyChild>
    </div>
)
 
}

export default App
