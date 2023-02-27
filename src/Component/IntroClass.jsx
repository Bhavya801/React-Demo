import React, { Component } from 'react'

export default class IntroClass extends Component {
    constructor(){
        super()
        this.state={
            intro: "My name is Bhavya. I live in Delhi. I love to travel",
        }
    }
    frenchintro() {
        this.setState({ intro: 
                            "Je m’appelle Bhavya. J’habite à Delhi. J'aime voyager."
                        })
    }
    
    englishintro(){
        this.setState({intro:  "My name is Bhavya. I live in Delhi. I love to travel"})
    }

    render() {
        
    return (
        <div><h1>{this.state.count}</h1>
        <div>
        <h1>{this.state.intro}</h1>
        <button onClick={()=>this.frenchintro()}>Translate to French</button>
        <button onClick={()=>this.englishintro()}>Translate to English</button>

        </div>
        {/* <div>child</div> */}
        </div>
    )
  }
  
}

