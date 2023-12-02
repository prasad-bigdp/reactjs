import React,{useState} from 'react'
import PropTypes from 'prop-types'

function Values (prop)
{
    console.log(prop)
    const [inpVal,setInpVal] = useState('')
    const d = "prasad"
    const parentValue = () =>
    {
        console.log(inpVal)
        prop.fun(inpVal)
    }
    return (
        <div className='child'>
            <p>I'm child</p>
            <input type="text" onChange={(e) =>
            {
                console.log(e.target.value)
                setInpVal(e.target.value)
            }
            }/>
            <button onClick={parentValue}>Click</button>
        
        </div>
        
    )
}
Values.propTypes = {
    message: PropTypes.number,
    greeting: PropTypes.string,
    fun: PropTypes.func

}

export default Values;
