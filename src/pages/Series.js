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
            allSeries: null,
            api_url: CONFIGS.BACKEND_API_URL + CONFIGS.ALL_SERIES_PATH,
            loaderIsHidden: false
        };
    }
    componentDidMount(){
        let localSeries = JSON.parse(localStorage.getItem(CONFIGS.LOCAL_SERIES_KEY))
        let localSeriesTS = parseInt(localStorage.getItem(CONFIGS.LOCAL_SERIES_TIMESTAMP_KEY))
        
        let cond1 = (((Math.floor(Date.now() / 1000)) - localSeriesTS) > CONFIGS.LOCAL_CACHE_INTERVAL)
        let cond2 = (localSeries === null || localSeriesTS === null)

        if(cond1 || cond2){
            this.fetchSeries();
        }
        this.setState({
            allSeries: localSeries,
            loaderIsHidden: true
        })
    }

    fetchSeries = () => {
        console.log('start fetch')
        fetch("https://cors-anywhere.herokuapp.com/"+this.state.api_url)
        .then(res => res.json())
        .then(data => {
            this.setState({
                allSeries: data,
                loaderIsHidden:true
            })
            console.log('start end')
            localStorage.setItem(CONFIGS.LOCAL_SERIES_KEY, JSON.stringify(data))
            localStorage.setItem(CONFIGS.LOCAL_SERIES_TIMESTAMP_KEY, (Math.floor(Date.now() / 1000)).toString())
        }).catch(err => console.log(err))
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.state.loaderIsHidden
                    ?
                        <React.Fragment>
                            <Navbar activeTab="Series"/>
                            <Jumbotron />
                            {this.state.allSeries ? 
                                <div className="container">
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
