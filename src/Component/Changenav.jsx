import React, { PureComponent } from 'react'
import IntroComp from './IntroComp'
import Counter from './CountClass'
import AxiosDemo from './AxiosDemo'


export default class Changenav extends PureComponent {
    constructor(){
        super()
        this.state={
          flag:this.props,
        }
    }
    navchange(){
        this.setState({flag:!this.state.flag})
    }
  render() {
    return (
      <div>
        <AxiosDemo/>
        <h3>{this.state.flag?<IntroComp trans = {true} />:<Counter/>}</h3>
        <button onClick={()=>this.navchange()}>Tap to view another task</button>
      
      </div>
    )
  }
}
