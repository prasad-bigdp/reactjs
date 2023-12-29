import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {Incr,Decr,Login,Logout, fetchData} from './action'
import { useEffect } from 'react';
function App ()
{
  const count = useSelector((state) => state.counterr)
  const auth = useSelector((state) => state.auth)
  const posts= useSelector((state)=>state.fetchh)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchData)
  }, [dispatch])
  console.log(posts)
  return (
    <div className="App">
      {posts && <div>
        {posts.data.map((post,index) => <p key={index}>{post.title}</p>)}
      </div>}
      <p>count:{count}</p>
      <button onClick={() => dispatch(Incr())}>Incr</button>
      <button onClick={()=>dispatch(Decr())}>Decr</button>
    </div>
  );
}

export default App;
