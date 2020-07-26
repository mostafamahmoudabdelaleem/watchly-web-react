import React, { Component } from 'react'

export default class PageItem extends Component {
    
    onClick = () => {
        this.props.callback(parseInt(this.props.pageNum))
    }


    render() {
        let isActive = Boolean(this.props.activePage === this.props.pageNum)
        return (
            <li className={isActive ? "page-item active" : "page-item"}>
                <button className="page-link" aria-current="page" onClick={this.onClick}>{this.props.pageNum}</button>
            </li>
        )
    }
}
