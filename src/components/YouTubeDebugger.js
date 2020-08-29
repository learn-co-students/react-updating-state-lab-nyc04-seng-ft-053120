// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component {
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

    handleBitrateClick = () => {
        this.setState(prevState => {
            return {
                ...prevState,
                settings: {
                    ...prevState.settings,
                   bitrate: 12 
            }
            }
        })
    }

    handleResolutionClick = () => {
        this.setState((prevState) => {
            return{
                ...prevState,
                settings: {
                    ...prevState.settings,
                    video: {
                    resolution: '720p'
                    }
                }
            }
        })
    }




    render(){
        return(
            <div>
                <h1>{this.state.birate}</h1>
                <button className="bitrate" onClick={this.handleBitrateClick}>Bitrate</button>
                <button className="resolution"onClick={this.handleResolutionClick}>Resolution</button>
            </div>
        )
    }
}





export default YouTubeDebugger