import React, { Component } from 'react'
import { CONFIGS } from '../configs'
import { fetchSeries } from '../js/api-utils'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
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
        let { page } = this.props.match.params
        
        this.state = {
            allSeries: [],
            loaderIsHidden: false,
            currentPage: parseInt(page) || 1,
            pageLimit: CONFIGS.PAGINATION_PAGE_LIMIT,
            query: ""
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

    search = (e) => {
        this.setState({
            query: e.target.value.toLowerCase(),
            currentPage: 1
        })
    }

    render() {
        let list = [];
        if(this.state.query === ""){
            list = this.state.allSeries
        }else{
            list = this.state.allSeries.filter((val) => val.name.toLowerCase().includes(this.state.query));
        }

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
                            {list
                            ? 
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2">
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="basic-addon1">
                                                        <i className="fas fa-search"></i>
                                                    </span>
                                                </div>
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    placeholder="Search" 
                                                    onChange={this.search}/>
                                            </div>
                                        </div>
                                    </div>
                                    <h2 className="fg-orange">
                                        <i className="fas fa-film"></i> Recent Series:
                                    </h2>
                                    <div className="row">
                                        <DisplayList 
                                            list={list.slice(start, end)} 
                                            replace="series"
                                            with="aseries"
                                            isSeries="series"
                                        />
                                        <div className="col-12 mt-4">
                                            <Pagination 
                                                activePage={this.state.currentPage}
                                                length={list.length}
                                                pageLimit={this.state.pageLimit}
                                                callback={this.changePage}/>
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
