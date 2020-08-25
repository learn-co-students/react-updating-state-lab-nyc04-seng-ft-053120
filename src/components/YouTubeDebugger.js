import React from 'react';

class YouTubeDebugger extends React.Component {
    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p',
            }
        }
    }

    handleClickBitRate = (event) => {
        this.setState(prevState => ({
            settings: {
                ...prevState.settings,
                bitrate: 12,
            }

        }))
    }

    handleClickResolution = (event) => {
        this.setState(prevState => ({
            settings: {
                ...prevState.settings,
                video: {
                    resolution: '720p'
                },
            }
        }))
    }

    render() {
        return (
            <div>
                <span>Bitrate</span>
                <button onClick={this.handleClickBitRate} className="bitrate">{this.state.settings.bitrate}</button>
                <br></br>
                <span>Resolution</span>
                <button onClick={this.handleClickResolution} className="resolution">{this.state.settings.video.resolution}</button>
            </div>
        )
    }
}

export default YouTubeDebugger;