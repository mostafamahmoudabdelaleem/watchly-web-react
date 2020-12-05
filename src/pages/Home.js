import React, { Component } from 'react'
import { CONFIGS } from '../configs'
import { fetchSeries, fetchMovies } from '../js/api-utils'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Jumbotron from '../components/jumbotron'
import DisplayList from '../components/displayList'
import Loader from '../components/loader'
import '../css/Components.css';
import '../css/Components-media-575.css';
import '../css/Components-media-991.css';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            allSeries: [],
            movies: [],
            api_url: CONFIGS.BACKEND_API_URL + CONFIGS.ALL_SERIES_PATH,
            loaderIsHidden: false
        };
    }

    componentDidMount(){
        fetchMovies((data) => {
            this.setState({
                movies: data,
            })
        })
        fetchSeries((data) => {
            this.setState({
                allSeries: data,
                loaderIsHidden: true
            })
        })
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.state.loaderIsHidden
                    ?
                        <React.Fragment>
                            <Navbar activeTab="Home"/>
                            <Jumbotron />
                            {this.state.allSeries || this.state.movies  ? 
                                <div className="container">
                                    <div>
                                        <h2 className="fg-orange">
                                            <i className="fas fa-video"></i> Recent Movies:
                                        </h2>
                                        <div className="row">
                                            <DisplayList 
                                                list={this.state.movies.slice(0,12)} 
                                                pre="movie"
                                                isSeries="series"
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <h2 className="fg-orange">
                                            <i className="fas fa-film"></i> Recent Series:
                                        </h2>
                                        <div className="row">
                                            <DisplayList 
                                                list={this.state.allSeries.slice(0,12)} 
                                                pre="episode"
                                                isSeries="series"
                                            />
                                        </div>
                                    </div>
                                </div>
                            :
                                <p className="text-center">No Series Found</p>
                            }
                            <Footer />
                        </React.Fragment>
                    :
                        <Loader />
                }
            </React.Fragment>
        )
    }
}
