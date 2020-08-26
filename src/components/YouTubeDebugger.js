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

//   handleBitRate = () => {
//     this.setState({
//       settings: {
//         ...this.state.settings,
//         bitrate: 12
//       }
//     });
//   };

  handleBitRate = () =>{
    // console.log('HELLO')
        this.setState({
            settings: {
                ...this.state.settings,
                 bitrate: 12
            } 
        },
        // () => (console.log(this.state.settings.bitrate))
        )
  }

  handleRes = () => {
     this.setState({
        settings: {
            ...this.state.settings,
            video: {
                resolution: '720p'
            }
        }
     },
    //  () => (console.log(this.state.settings.video.resolution))
     )
  }

    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.handleBitRate} >Hello</button>
                <button className="resolution" onClick={this.handleRes}>RES</button>
            </div>
       
        )
    }
}

export default YouTubeDebugger
