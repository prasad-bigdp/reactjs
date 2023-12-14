import React,{useImperativeHandle} from 'react'

const Child = React.forwardRef(function MyComponent (props, ref)
{
    useImperativeHandle(
			ref,
			() => {
				return {
					focus() {
						ref.current.focus()
					},
					
				}
			},
			[],
		)
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  )
})

export default Child
