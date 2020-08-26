import React from 'react';

class YoutubeDebugger extends React.Component {
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

  handbleBitrateChange = () => {
    return this.setState(prevState => {
      return {
        settings: {
          ...this.state.settings,
          bitrate: 12
        }
      }
    })
  }

  handleResolutionChange = () => {
    return this.setState(prevState => {
      return {
        settings: {
          ...this.state.settings,
          video: {
            resolution: '720p'
          }
        }
      }
    })
  }

  render() {
    return (
      <div>
        {/* Create a button with the class 'bitrate'. Clicking this button changes the settings.bitrate state property to 12. */}
        <button className='bitrate' onClick={this.handbleBitrateChange}>Change Bitrate to 12</button>

        {/* Create a button with the class 'resolution'. Clicking this button changes the settings.video.resolution state property to '720p'. */}
        <button className="resolution" onClick={this.handleResolutionChange}>Change State Property to 720p</button>
      </div>
      
    )
  }
}

export default YoutubeDebugger;
