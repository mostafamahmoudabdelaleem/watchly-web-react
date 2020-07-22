import React, { Component } from 'react'
import { CONFIGS } from '../configs'
import Navbar from '../components/navbar'
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
        this.fetchData();
    }

    fetchData = () => {
        fetch("https://cors-anywhere.herokuapp.com/"+this.state.api_url)
        .then(res => res.json())
        .then(data => {
            this.setState({
                allSeries: data,
                loaderIsHidden:true
            })  
        }).catch(err => console.log(err))
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
                                                list={this.state.movies} 
                                                replace="series"
                                                with="aseries"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="fg-orange">
                                            <i className="fas fa-film"></i> Recent Series:
                                        </h2>
                                        <div className="row">
                                            <DisplayList 
                                                list={this.state.allSeries} 
                                                replace="series"
                                                with="aseries"
                                            />
                                        </div>
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
