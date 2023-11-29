import React, { useState } from 'react'

const Counter = () =>
{
    /* useState */ 
    const [count, setCount] = useState(0);
    const [error,setError]=useState('')
  
    const incr = () =>
    {
       setCount(count + 1)
    }
    
    const decr = () =>
    {
        if (count <= 0)
        {
            setError('No below error')
        }
        else
        {
                    setCount(count-1)

        }
    }
    const reset = () =>
    {
        setCount(0)
        
    }
    
  return (
      <div className='counter'>
          <p>Functional</p>
          <p>Count:{count}</p>
          <p className='error'>{error}</p>
          <div className='buttons'>
              <button onClick={incr}>+</button>
          <button onClick={decr}>-</button>
        <button onClick={reset}>Reset</button>

          </div>
          

    </div>
  )
}

export default Counter
