import React, {  Component } from 'react'

export default class ClassComponent extends Component
{
    constructor(props)
    {
        super(props);
        console.log("constructor called")
        this.state = {
            count: 0,
            data:[],
        }
    }
    fetchData = () =>
    {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((da) =>
            {
                console.log(da)
                this.setState({ data: da })
            })
        
    }
   
    componentDidMount ()
    {
        console.log("component did mount called")
        // will be triggered only once after the component mounted
        // it is used for API purposes
        this.fetchData();



    }
    componentDidUpdate ()
    {
        console.log("compoenent did update called")
    }
    // shouldComponentUpdate ()
    // {
    //     console.log("compoenent should update called");
    //     return true;
    // }
    getSnapshotBeforeUpdate ()
    {
        console.log("Compoenet get snapshot called");
  return null
    }
    incr= ()=>
    {
        this.setState({count:this.state.count+1})
    }
    render ()
    {
        console.log("render called")
    return (
      <div>
            <p>Count:{this.state.count}</p>
            <button onClick={this.incr}>Increase</button>
            {this.state.data && (this.state.data.map((val, index) => (
                <div>
                    {val.title}
                    </div>
            )))}
      </div>
    )
  }
}
