import React, { useImperativeHandle } from 'react'
import {useState} from 'react'

const Child = React.forwardRef(function MyComponent (props, ref)
{
	cost[(value, setValue)] = useState(0)
    useImperativeHandle(
			ref,
			() => {
				return {
					focus() {
						ref.current.focus()
					}
					
				}
			},
			[value],
		)
  return (
	  <div>
      <input type="text" ref={ref} onChange={()=>setValue(value+1)}/>
    </div>
  )
})

export default Child
