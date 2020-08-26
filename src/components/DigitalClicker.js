import React, { Component } from 'react';

export default class DigitalClicker extends Component {

  state = {
    timesClicked: 0
  }

  handleClick = (event) => {
    this.setState(previousState => ({ timesClicked: previousState.timesClicked + 1 }))
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    )
  }
}
