import React, { useCallback, useEffect, useState } from 'react'

const Logo =  ({count,submit}) =>
{
    const [value,setValue]=useState(0)
    useEffect(() =>
    {
        console.log("logo called")
    })
  return (
		<div>
			<img
				src='https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
				alt='logo' height='200' width='200'
          />
          Value:{value}
          <button onClick={() =>
          {
              setValue(submit(2, 3))
          }}>Child Click</button>
		</div>
	)
}

export default React.memo(Logo)
