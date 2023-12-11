import './App.css';
import { useState } from 'react';
import { myContext } from './context.js';
import Input from './Input.js'
import Value from './Value.js';

function App ()
{
  const [count, setCount] = useState(0)
  const [text,setText]=useState('')
 
  return (
		<div
			className='App'
      style={{ border: "2px solid red", height: "400px", width: "400px" }}>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <p>{count}</p>
      <myContext.Provider value={{ count, setCount,text }}>
        <Input />
      </myContext.Provider>
      <button onClick={()=>setCount(count+2)}>increase</button>
		</div>
	)
}

export default App;
