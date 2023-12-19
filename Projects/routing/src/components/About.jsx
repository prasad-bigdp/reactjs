import React, { useState } from 'react'
import { Link,Outlet } from 'react-router-dom'

const About = () =>
{
  const [count,setCount]=useState(0)
  return (
		<div>
			<p>This is About</p>
			<button onClick={() => setCount(count + 1)}>
				<Link to='counter'>Counter</Link>
			</button>
			<button>
				<Link to='todo'>Todo</Link>
      </button>
      <Outlet />
      <p>end of about</p>
		</div>
	)
}

export default About
