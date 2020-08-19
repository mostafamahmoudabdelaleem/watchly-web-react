import React, { Component } from 'react'
import { changeDocumentTitle, changeMetaImg, changeMetaURL } from '../js/seo-utils'
import { fetchSingleSeries } from '../js/api-utils'
import { CONFIGS } from '../configs'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Loader from '../components/loader'
import DisplayList from '../components/displayList'
import Jumbotron from '../components/jumbotron'
import Pagination from '../components/pagination'
import '../css/Components.css';
import '../css/Components-media-575.css';
import '../css/Components-media-991.css';

export default class Aseries extends Component {

    constructor(props){
        super(props);
        const { id, name, page } = this.props.match.params
        const { data } = this.props.location.state
        this.state = {
            series: null,
            loaderIsHidden: false,
            id,
            name,
            data,
            currentPage: parseInt(page) || 1,
            pageLimit: CONFIGS.PAGINATION_PAGE_LIMIT
        }
        changeDocumentTitle(this.state.name);
        changeMetaImg(this.state.data.img_link);
        changeMetaURL(window.location);
    }
    
    componentDidMount(){
        let link = `https://eg4.akwam.net/series/${this.state.id}/${this.state.name}`;
        fetchSingleSeries(link, (data) => {
            this.setState({
                series: data,
                loaderIsHidden: true
            })
            changeDocumentTitle(this.state.name);
            changeMetaImg(this.state.data.img_link);
            changeMetaURL(window.location);
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

        let path = `aseries/${this.state.id}/${this.state.name}`;

        return (
            <div>
            {
                this.state.loaderIsHidden
                ?
                    <React.Fragment>
                        <Navbar />
                        <Jumbotron />
                        {
                            this.state.series.length
                            ?
                                <div className="container">
                                    <h2 className="fg-orange">
                                        <i className="fas fa-film"></i> {this.state.name}:
                                    </h2>
                                    <div className="row">
                                        <DisplayList 
                                            list={this.state.series.slice(start, end)} 
                                            isSeries="episode"
                                        />
                                        <div className="col-12 mt-4">
                                            <Pagination 
                                                activePage={this.state.currentPage}
                                                length={this.state.series.length}
                                                pageLimit={this.state.pageLimit}
                                                callback={this.changePage}
                                                path={path} />
                                        </div>
                                    </div>
                                </div>
                            :
                                <p className="text-center">No Episodes Found</p>
                        }
                        <Footer />
                    </React.Fragment>
                :
                    <Loader />
            }
        </div>
        )
    }
}
