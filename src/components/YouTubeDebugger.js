// Code YouTubeDebugger Component Here

import React, { Component } from "react";

export default class YouTubeDebugger extends Component{

    state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
      }

    handleBitrateClick = (e) => {
        
        this.setState( previous => ({   
                settings: {
                    ...previous.settings, 
                    bitrate: 12
                } 
            })
            
        )
    }
    
    handleResolutionClick = (e) => {
        this.setState(
         (currentState) => 
           ( {
                 settings: {
                    ...currentState.settings,
                    video: {
                        resolution: '720p'
                    }
                 }
             })
        )
    }



    render(){
        return(
        <div>
            <button className="bitrate" onClick={this.handleBitrateClick}> <h1>Bitrate: {this.state.settings.bitrate}</h1></button>

        <button className="resolution" onClick={this.handleResolutionClick}> <h1>Resolution: {this.state.settings.video.resolution}</h1> </button>
         </div>
        );
    }

    
}