import React, { Component } from 'react'

export default class IntroEnglish extends Component {
  constructor(){
    super()
  }
  render() {
    return (
      <div>
        <h3>"Je m’appelle {this.props.name}. J’habite à {this.props.city}. J'aime {this.props.hobby}."</h3>
      </div>
    )
  }
}
