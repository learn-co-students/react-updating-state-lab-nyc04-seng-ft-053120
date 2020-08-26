// Code DigitalClicker Component Here

import React, { Component } from "react";

export default class DigitalClicker extends Component{
    state = {
        timesClicked: 0
    }

    clickHandle = (e) => {
        // setState can take in a callback in order to update the object when ever the button is clicked
        this.setState((current) => {
            // here we grab assign a new obj at the same to key to be valued and merged with the "current" obj in state >>> updated
            return {timesClicked: current.timesClicked += 1}
        })
    }
    

    render(){
        return (
            <button onClick={this.clickHandle}>
               <h1>{this.state.timesClicked}</h1>
            </button>
        )
    }
}