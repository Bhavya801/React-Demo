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
        value===0 ? this.setState({count:this.state.count -1}): this.setState({ count: this.state.count + 1 })
        
        // if(value == 0){
        //     if(this.state.count>0){
        //             this.setState({count:this.state.count -1})
        //         }
        //         else{
        //             this.state.count=0
        //         }
        //     }
        // else{
        //     this.setState({ count: this.state.count + 1 })
        // }
    }
    // addcounter() {
    //     this.setState({ count: this.state.count + 1 })
    // }
    
    // decreasecounter() {
    //     if(this.state.count>0){
    //     this.setState({count:this.state.count -1})
    //     }
    //     else{
    //         this.state.count=0
    //     }
    //     }
    reset(){
        this.setState({count:rand})
    }

    render() {
        
    
    return (
        <div><h1>{this.state.count}</h1>
        <div>
        <button onClick={()=>this.counter(1)}>Increment</button>
        <button onClick={()=>this.counter(0)}>Decrement</button>
        {/* <button onClick={()=>this.addcounter()}>Increment</button>
        <button onClick={()=>this.decreasecounter()}>Decrement</button> */}
        <button onClick={()=>this.reset()}>Start Over</button>
        </div>
        {/* <div>child</div> */}
        </div>
    )
  }
}
