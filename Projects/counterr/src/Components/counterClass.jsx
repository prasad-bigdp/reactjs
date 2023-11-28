
import React, { Component } from 'react'

export default class CounterClass extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
           count:0, // initialization
       }
    }
    incr = () =>
    {
      this.setState({count:this.state.count+1})
    }
    decr = () =>
    {
              this.setState({count:this.state.count-1})

    }
    reset = () =>
    {
              this.setState({count:0})

    }
  render() {
    return (
        <div className='counter'>
            <p>class</p>
            <p>Count:{this.state.count}</p>
            <div className='buttons'>
                 <button onClick={this.incr}>+</button>
                 <button onClick={this.decr}>-</button>
                 <button onClick={this.reset}>Reset</button>
            </div>
      </div>
    )
  }
}
