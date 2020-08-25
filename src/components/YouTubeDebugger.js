// Code YouTubeDebugger Component Here
import React from 'react';

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

  setBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  setResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }

  render() {
    return (
      <div>
        <button 
          onClick={this.setBitrate} 
          className="bitrate">
            Bitrate
        </button>
        <button 
          className="resolution"
          onClick={this.setResolution}>
            Resolution
        </button>
      </div>
    )
  }
}

export default YouTubeDebugger

