import React, { Component } from 'react'
import PageItem from './pageItem'

export default class Pagination extends Component {
    render() {
        let numPages = Math.round(parseInt(this.props.length) / parseInt(this.props.pageLimit));
        let pages = [];
        for(let i=0; i<numPages; i++){
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
