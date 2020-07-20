import React, { Component } from 'react'
import NavItem from './navItem'

export default class Navbar extends Component {
    render() {
        let p = {
            username: this.props.username,
            profilePic: this.props.profilePic,
            active: this.props.activeTab
        }
        return (
            <nav className="navbar navbar-expand-md navbar-light">
                <a className="navbar-brand" href="/" style={{fontFamily: 'Pacifico', color: '#fff'}}>Watchly<span className="fas fa-play sm-logo"></span></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="fas fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <NavItem name="Home" link="/" icon="home" active={p.active}/>
                        <NavItem name="Movies" link="/movies" icon="video" active={p.active}/>
                        <NavItem name="Series" link="/series" icon="film" active={p.active}/>
                    </ul>
                    <ul className="navbar-nav my-2 my-lg-0">
                        <NavItem name={p.username} link="/profile" imgUrl={p.profilePic} isImg="true" active={p.active}/>
                        <NavItem name="Logout" link="/logout" icon="sign-out-alt" active={p.active}/>
                    </ul>
                </div>
            
            </nav>
        )
    }
}

Navbar.defaultProps = {
    username: "Mostafa",
    profilePic: "https://watchly.000webhostapp.com/img/users-profile-picture/pic_4.jpg",
    activeTab: "None"
}