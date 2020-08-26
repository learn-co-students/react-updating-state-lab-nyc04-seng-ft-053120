// Code DigitalClicker Component Here
import React from 'react';


class DigitalClicker extends React.Component {

    // constructor() {
    //     super()
    //     this.state = {
    //         timeClicked: 0
    //     }
    // }

state = {
    timesClicked: 0
};

handleCount = () => {
    // console.log(this.state.timeClicked)
    this.setState(previousState => {
        // console.log(previousState.timeClicked += 1)
        return {timesClicked: previousState.timesClicked += 1}
    })
}

    render() {
        return(
            <button onClick={this.handleCount}>{this.state.timesClicked}</button>
        )
    }
}

export default DigitalClicker
