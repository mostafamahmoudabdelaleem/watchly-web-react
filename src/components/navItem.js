import React, { Component } from 'react'
import { Link } from 'react-router-dom'



export default class NavItem extends Component {
    render() {
        let p = {
            icon: "fas fa-"+this.props.icon,
            link: this.props.link,
            name: this.props.name,
            isActive: Boolean(this.props.name === this.props.active),
            isImg: this.props.isImg,
            imgUrl: this.props.imgUrl
        }
        return (
            (p.isImg ?
                <li className={(p.isActive ? 'nav-item active' : 'nav-item')}>
                    <Link className="nav-link for-img" to={p.link}>
                        <img className="nav-img" src={p.imgUrl} alt={p.name}/> {p.name}
                    </Link>
                </li>
            :
                <li className={(p.isActive ? 'nav-item active' : 'nav-item')}>
                    {
                        this.props.type === 'button'
                        ?
                            <span 
                                className="nav-link" 
                                onClick={this.props.callback}
                                style={{ cursor: 'pointer'}}>
                                <i className={p.icon}></i> {p.name}
                            </span>
                        :
                            <Link className="nav-link" to={p.link}><i className={p.icon}></i> {p.name}</Link>
                    }
                </li>
            )
        )
    }
}

NavItem.defaultProps = {
    isImg: false
}