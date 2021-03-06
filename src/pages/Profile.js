import React, { Component } from 'react'
import { getUser } from '../js/localStorage-utils'
import { changeDocumentTitle } from '../js/seo-utils'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import '../css/Components.css';
import '../css/Components-media-575.css';
import '../css/Components-media-991.css';

export default class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: getUser()
        }
    }

    UNSAFE_componentWillMount(){
        if(this.state.user.username === null){
            console.log(this.state.user.username)
            window.location = "/"
        }
        
    }

    componentDidMount(){
        changeDocumentTitle(`${this.state.user.username.split(" ")[0]}'s profile`)
    }

    render() {
        let u = this.state.user

        return (
            <div>
                <Navbar activeTab={u.username}/>
                <div className="container">
                    <div className="row mt-4 mb-4">
                        <div className="col-12 col-sm-10 offset-sm-1">
                            <div className="card">
                                <div className="card-header fg-orange">
                                    <i className="fas fa-user"></i> {u.username.split(" ")[0]}'s Profile Details:
                                </div>
                                <div className="card-body row">
                                    <div className="col-12 col-md-4">
                                        <img 
                                            className="rounded img-fluid" 
                                            src={u.profilePic} 
                                            alt={u.username}
                                            style={{minWidth: "100%"}} />
                                    </div>
                                    <div className="col-12 col-md-8">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item"><b>Name: </b>{u.username}</li>
                                            <li className="list-group-item"><b>Email: </b>{u.email}</li>
                                            <li className="list-group-item"><b>Auth Provider: </b>{u.provider}</li>
                                        </ul>
                                        <h6 className="text-muted text-center mt-4"><i className="fas fa-info-circle"></i>  This is all the data we know about you.</h6>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
