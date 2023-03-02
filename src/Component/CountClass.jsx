import React, { Component } from 'react'
let rand= Math.floor(Math.random()*100)

export default class child extends Component {
    constructor(){
        super()
        this.state={
            count:rand,
        }
    }
    counter(value){
        this.setState({
            count:value==0 ?this.state.count -1:this.state.count + 1
        })
        
      
    }

    reset(){
        this.setState({count:rand})
    }

    render() {
        
    
    return (
        <div><h1>{this.state.count}</h1>
        <div>
        <button onClick={()=>this.counter(1)}>Increment</button>
        <button onClick={()=>this.counter(0)}>Decrement</button>
        <button onClick={()=>this.reset()}>Start Over</button>
        </div>
        </div>
    )
  }
}
