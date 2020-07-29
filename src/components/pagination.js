import React, { Component } from 'react'
import PageItem from './pageItem'

export default class Pagination extends Component {
    render() {
        let start = 0;
        let end = 10;
        let numPages = Math.ceil(parseInt(this.props.length) / parseInt(this.props.pageLimit));
        if(numPages > 10){
            if(this.props.activePage > 7){
                start = (this.props.activePage - 5)
                end = (this.props.activePage + 5)
            }
        }else{
            end = numPages
        }
        let pages = [];
        for(let i=start; i<end; i++){
            pages.push(i+1)
        }

        return (
            <ul className="pagination justify-content-center">
                {
                    pages.map((num, i) => {
                        return (
                            <PageItem 
                                key={i}
                                activePage={this.props.activePage} 
                                pageNum={num}
                                callback={this.props.callback}/>
                        )
                    })
                }
            </ul>
        )
    }
}
