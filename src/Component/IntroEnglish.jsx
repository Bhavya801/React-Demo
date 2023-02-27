import React, { Component } from 'react'

export default class IntroEnglish extends Component {
  constructor(){
    super()

  }
  render() {
    return (
      <div>
        <h1>"My name is {this.props.name}. I live in {this.props.city}. I love to {this.props.hobby}"</h1>
      </div>
    )
  }
}
