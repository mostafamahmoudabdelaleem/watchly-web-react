import React, { Component } from 'react'


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
                    <a className="nav-link for-img" href={p.link}>
                        <img className="nav-img" src={p.imgUrl} alt={p.name}/> {p.name}
                    </a>
                </li>
            :
                <li className={(p.isActive ? 'nav-item active' : 'nav-item')}>
                    <a className="nav-link" href={p.link}><i className={p.icon}></i> {p.name}</a>
                </li>
            )
        )
    }
}

NavItem.defaultProps = {
    isImg: false
}