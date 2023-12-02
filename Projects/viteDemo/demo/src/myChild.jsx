import React from 'react'

const MyChild = (props) =>
{
  console.log(props)
  return (
    <div>
      <>I'm child</>
      <div>{ props.children }</div>
    </div>
  )
}

export default MyChild
