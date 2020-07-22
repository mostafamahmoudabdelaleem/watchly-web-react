import React, { Component } from 'react'
import { CONFIGS } from '../configs'
import Navbar from '../components/navbar'
import Jumbotron from '../components/jumbotron'
import DisplayList from '../components/displayList'
import Loader from '../components/loader'
import '../css/Components.css';
import '../css/Components-media-575.css';
import '../css/Components-media-991.css';

export default class Series extends Component {
    constructor(props){
        super(props);
        this.state = {
            movies: null,
            api_url: CONFIGS.BACKEND_API_URL + CONFIGS.ALL_SERIES_PATH,
            loaderIsHidden: false
        };
    }
    componentDidMount(){
        this.fetchMovies();
    }

    fetchMovies = () => {
        this.setState({
            movies: [],
            loaderIsHidden: true
        })
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.state.loaderIsHidden
                    ?
                        <React.Fragment>
                            <Navbar activeTab="Movies"/>
                            <Jumbotron />
                            {this.state.movies ? 
                                <div className="container">
                                    <h2 className="fg-orange">
                                        <i className="fas fa-video"></i> Recent:
                                    </h2>
                                    <div className="row">
                                        <DisplayList list={this.state.movies} />
                                    </div>
                                </div>
                            :
                                <p className="text-center">No Series Found</p>
                            }
                        </React.Fragment>
                    :
                        <Loader />
                }
            </React.Fragment>
        )
    }
}
