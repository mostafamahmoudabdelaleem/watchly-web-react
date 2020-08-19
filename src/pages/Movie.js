import React, { Component } from 'react'
import { changeDocumentTitle, changeMetaImg, changeMetaURL } from '../js/seo-utils'
import { fetchVideoLinks } from '../js/api-utils'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Loader from '../components/loader'
import VideoPlayer from '../components/videoPlayer'
import '../css/Components.css';
import '../css/Components-media-575.css';
import '../css/Components-media-991.css';


export default class Movie extends Component {
    constructor(props){
        super(props);
        const { id, name } = this.props.match.params
        const { data } = this.props.location.state
        this.state = {
            links: null,
            loaderIsHidden: false,
            id,
            name,
            data
        }
    }


    componentDidMount(){
        let link = `https://eg4.akwam.net/movie/${this.state.id}`;
        fetchVideoLinks(link, (data) => {
            this.setState({
                links: data,
                loaderIsHidden: true
            })
            changeDocumentTitle(this.state.name);
            changeMetaImg(this.state.data.img_link);
            changeMetaURL(window.location);
        })
    }


    render() {
        return (
            <div>
                {
                    this.state.loaderIsHidden
                    ?
                        <React.Fragment>
                            <Navbar />
                            <div className="container">
                                <div className="row">
                                    <VideoPlayer links={this.state.links} poster={this.state.data.img_link} />
                                </div>
                            </div>
                            <Footer />
                        </React.Fragment>
                    :
                        <Loader />
                }
            </div>
        )
    }
}

