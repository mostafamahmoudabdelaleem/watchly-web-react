import React, { Component } from 'react'

export default class VideoPlayer extends Component {
    
    render() {

        if(typeof(this.props.links["480p"]) === "undefined"){
            window.history.back()
        }
        return (
            <div className="card col-12 col-md-10 offset-md-1 mt-4 embed-responsive embed-responsive-16by9">
                <video 
                    id="video_player" 
                    className="embed-responsive-item" 
                    poster={this.props.poster} 
                    src={this.props.links["480p"]}
                    controls="show">
                    <source src={this.props.links["480p"]} type="video/mp4" label="480p" res="480" />
                    {
                        typeof(this.props.links["720p"]) === 'undefined'
                        ?
                            ''
                        :
                            <source src="" type="video/mp4" label="720p" res="720" />
                    }
                    {
                        typeof(this.props.links["1080p"]) === 'undefined'
                        ?
                            ''
                        :
                            <source src="" type="video/mp4" label="1080p" res="1080" />
                    }					
                </video>
            </div>
        )
    }
}
