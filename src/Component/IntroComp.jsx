import React, { PureComponent } from 'react'
import IntroEnglish from './IntroEnglish'
import IntroFrench from './IntroFrench'


export default class IntroComp extends PureComponent {
    constructor(){
        super()
      
        this.state={
            trans:this.props,
        }
    }
    changelang(){
      console.log(this.state.trans)
      this.setState({trans:!this.state.trans})

    }
    
  render() {
    return (
      <div>
        <h3>{this.state.trans?<IntroEnglish name = "Bhavya" city = "Delhi" hobby ="Cooking"/>:<IntroFrench name = "Bhavya" city = "Delhi" hobby ="Cuisiner"/>}</h3>
        <button onClick={()=>this.changelang()}>Translate </button>
        {/* <button onClick={()=>this.englishintro()}>Translate to English</button> */}
      </div>
    )
  }
}
