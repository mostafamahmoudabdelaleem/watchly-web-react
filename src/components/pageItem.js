import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PageItem extends Component {
    
    onClick = () => {
        this.props.callback(parseInt(this.props.pageNum))
    }


    render() {
        let isActive = Boolean(this.props.activePage === this.props.pageNum)
        let url = `/${this.props.path}/page/${this.props.pageNum}`
        return (
            <li className={isActive ? "page-item active" : "page-item"}>
                <Link to={url} className="page-link" aria-current="page" onClick={this.onClick}>{this.props.pageNum}</Link>
            </li>
        )
    }
}
