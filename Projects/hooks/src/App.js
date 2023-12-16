import './App.css';
import { useCallback, useEffect, useMemo, useState } from 'react';
import Logo from './logo'



function App ()
{
  const [count, setCount] = useState(0)
  const [n1, sn1] = useState(2);
  const [n2, sn2] = useState(3);
  const result = useMemo(()=>
  {
    console.log("add called")
   
    return n1 + n2;
  },
  [n1,n2] 
  )
 
  const result2 = useCallback(() =>
  {
    console.log("use Callback called")
    return a + b;
  }, [])
  useEffect(() =>
  {
    console.log("use Effect called")
  })
  return (
		<div className='App'>
			<p>count:{count}</p>
			<p>Result:{result}</p>
			

			<button onClick={() => setCount(count + 1)}>Click</button>
			<button onClick={() => sn1(n1 + 1)}>change n1</button>
      <Logo count={count} submit={result2} />
		</div>
	)
}
export function useIncr (url)
{
   const [inc,setInc]=useState([])
  useEffect(() =>
  {
       fetch(url).then((res)=>res.json()).then((data)=>setInc(data))
     })
  
  
  
   return inc;
 }
export default App;
