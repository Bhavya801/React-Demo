import React, { Component } from 'react'

export default class IntroEnglish extends Component {
  constructor(){
    super()

  }
  render() {
    return (
      <div >
        <h3>"My name is {this.props.name}. I live in {this.props.city}. I love to {this.props.hobby}"</h3>
      </div>
    )
  }
}
