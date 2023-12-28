import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {Incr,Decr,Login,Logout} from './action'
function App ()
{
  const count = useSelector((state) => state.counterReducer)
  const auth = useSelector((state) => state.authReducer)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <p>count:{count}</p>
      <button onClick={() => dispatch(Incr())}>Incr</button>
      <button onClick={()=>dispatch(Decr())}>Decr</button>
    </div>
  );
}

export default App;
