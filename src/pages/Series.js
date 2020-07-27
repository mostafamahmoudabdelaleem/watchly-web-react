import React, { Component } from 'react'
import { CONFIGS } from '../configs'
import { fetchSeries } from '../js/api-utils'
import Navbar from '../components/navbar'
import Jumbotron from '../components/jumbotron'
import DisplayList from '../components/displayList'
import Loader from '../components/loader'
import Pagination from '../components/pagination'
import '../css/Components.css';
import '../css/Components-media-575.css';
import '../css/Components-media-991.css';

export default class Series extends Component {
    constructor(props){
        super(props);
        this.state = {
            allSeries: [],
            loaderIsHidden: false,
            currentPage: 1,
            pageLimit: CONFIGS.PAGINATION_PAGE_LIMIT
        };
    }
    componentDidMount(){
        fetchSeries((data) => {
            this.setState({
                allSeries: data,
                loaderIsHidden:true
            })
        })
    }

    changePage = (i) => {
        this.setState({
            currentPage: i
        })
    }

    render() {
        let p = this.state.currentPage;
        let start = (p-1) * this.state.pageLimit;
        let end = p * this.state.pageLimit;
        
        return (
            <React.Fragment>
                {
                    this.state.loaderIsHidden
                    ?
                        <React.Fragment>
                            <Navbar activeTab="Series"/>
                            <Jumbotron />
                            {this.state.allSeries
                            ? 
                                <div className="container">
                                    <h2 className="fg-orange">
                                        <i className="fas fa-film"></i> Recent Series:
                                    </h2>
                                    <div className="row">
                                        <DisplayList 
                                            list={this.state.allSeries.slice(start, end)} 
                                            replace="series"
                                            with="aseries"
                                            isSeries="series"
                                        />
                                        <div className="col-12 mt-4">
                                            <Pagination 
                                                activePage={this.state.currentPage}
                                                length={this.state.allSeries.length}
                                                pageLimit={this.state.pageLimit}
                                                callback={this.changePage}/>
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
