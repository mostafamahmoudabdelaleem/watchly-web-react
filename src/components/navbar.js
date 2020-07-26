import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { changeDocumentTitle } from '../js/seo-utils'
import { userLogout, getUsername, getUserPicture } from '../js/localStorage-utils'
import NavItem from './navItem'

export default class Navbar extends Component {

    constructor(props){
        super(props);
        let p = {
            username: getUsername(),
            profilePic: getUserPicture(),
            active: this.props.activeTab
        }
        this.state = {
            p
        }
        changeDocumentTitle(this.state.p.active);
    }
    
    

    logout = () => {
        userLogout()
        this.forceUpdate()
        window.location = "/"

    }
    
    
    render() {
        let p = this.state.p
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link className="navbar-brand" to="/" style={{fontFamily: 'Pacifico', color: '#fff'}}>Watchly<span className="fas fa-play sm-logo"></span></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="fas fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <NavItem name="Home" link="/" icon="home" active={p.active}/>
                        <NavItem name="Movies" link="/movies" icon="video" active={p.active}/>
                        <NavItem name="Series" link="/series" icon="film" active={p.active}/>
                    </ul>
                    {
                        p.username === null 
                        ?
                            <ul className="navbar-nav">
                                <NavItem name="Login" link="/login" icon="sign-in-alt" active={p.active}/>
                            </ul>
                        :
                            <ul className="navbar-nav">
                                <NavItem name={p.username} link="/profile" imgUrl={p.profilePic} isImg="true" active={p.active}/>
                                <NavItem type="button" callback={this.logout} name="Signout" icon="sign-out-alt" active={p.active} />
                            </ul>
                    }
                </div>
            
            </nav>
        )
    }
}
