import React from 'react';

class DigitalClicker extends React.Component {
  // This component has an initial state property called timesClicked, which is initially defined as 0.
  state = {
    timesClicked: 0
  }

  // Whenever the button is clicked, update the state by incrementing the timesClicked by 1.

  handleBtnClick = (evt) => {
    const callback = prevState => {
      return {
        timesClicked: prevState.timesClicked + 1
      }
    }

    this.setState(callback);
  }

  render() {
    return (

      // The component renders out a button with a label that shows the timesClicked value. This means that, at the start, your button should just say 0.

      <button onClick={this.handleBtnClick}>{this.state.timesClicked}</button>
    )
  }
}


export default DigitalClicker;