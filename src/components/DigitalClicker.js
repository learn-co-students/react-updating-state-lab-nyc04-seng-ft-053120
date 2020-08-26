// Code DigitalClicker Component Here
import React, { Component } from 'react';

class DigitalClicker extends Component {
  state = {
    timesClicked: 0,
  };

  click = () => {
    this.setState(() => ({
      timesClicked: this.state.timesClicked + 1,
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.click}>{this.state.timesClicked}</button>
      </div>
    );
  }
}

export default DigitalClicker;
