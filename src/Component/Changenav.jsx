import React, { PureComponent } from 'react'
import IntroComp from './IntroComp'
import Counter from './CountClass'
import AxiosDemo from './AxiosDemo'


export default class Changenav extends PureComponent {
    constructor(){
        super()
        // this.state={
        //     flag:false,
        // }
        this.state={
          flag:this.props,
        }
    }
    navchange(){
        // console.log("props",this.props.flag)
        // console.log(this.state.flag)
        this.setState({flag:!this.state.flag})
    }
  render() {
    return (
      <div>
        <AxiosDemo/>
        <h3>{this.state.flag?<IntroComp trans = {true} />:<Counter/>}</h3>
        <button onClick={()=>this.navchange()}>CHANGE</button>
        {/* <button onClick={()=>this.englishintro()}>Translate to English</button> */}
      </div>
    )
  }
}
