import React, { Component } from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import '../css/video-js.css'


export default class VideoPlayer extends Component {
    
    componentDidMount(){
        this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
            console.log('onPlayerReady', this)
        });
    }

    componentWillUnmount() {
        if (this.player) {
          this.player.dispose()
        }
      }

    render() {
        if(
            typeof(this.props.links["480p"]) === "undefined" && 
            typeof(this.props.links["720p"]) === "undefined" &&
            typeof(this.props.links["1080p"]) === "undefined"){
            window.history.back()
        }
        let defaultSrc = this.props.links["480p"];
        if(typeof(this.props.links["480p"]) === "undefined"){
            defaultSrc = this.props.links["720p"]
        }else if(typeof(this.props.links["480p"]) === "undefined" && typeof(this.props.links["720p"]) === "undefined"){
            defaultSrc = this.props.links["1080p"]
        }
        return (
            <div className="card col-12 col-md-10 offset-md-1 mt-4 embed-responsive embed-responsive-16by9">
                <video 
                    ref={ node => this.videoNode = node }
                    className="video-js vjs-default-skin embed-responsive-item"
                    controls={true} preload="metadata"
                    responsive="true"
                    poster={this.props.poster} 
                    src={defaultSrc}
                    data-setup='{}'>
                    <source src={this.props.links["480p"]} type="video/mp4" label="480p" res="480" />
                    {
                        typeof(this.props.links["720p"]) === 'undefined'
                        ?
                            ''
                        :
                            <source src={this.props.links["720p"]} type="video/mp4" label="720p" res="720" />
                    }
                    {
                        typeof(this.props.links["1080p"]) === 'undefined'
                        ?
                            ''
                        :
                            <source src={this.props.links["1080p"]} type="video/mp4" label="1080p" res="1080" />
                    }					
                </video>
            </div>
        )
    }
}
