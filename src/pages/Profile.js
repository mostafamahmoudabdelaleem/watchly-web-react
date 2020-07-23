import React, { Component } from 'react'
import { CONFIGS } from '../configs'
import Navbar from '../components/navbar'
import '../css/Components.css';
import '../css/Components-media-575.css';
import '../css/Components-media-991.css';

export default class Profile extends Component {
    constructor(props){
        super(props);
        let u = {
            username: localStorage.getItem(CONFIGS.LOCAL_USER_NAME_KEY),
            profilePic: localStorage.getItem(CONFIGS.LOCAL_USER_PIC_KEY),
            email: localStorage.getItem(CONFIGS.LOCAL_USER_EMAIL_KEY),
            provider: localStorage.getItem(CONFIGS.LOCAL_USER_AUTH_PROVIDER_KEY),
            uuid: localStorage.getItem(CONFIGS.LOCAL_UUID_KEY)
        }
        this.state = {
            user: u
        }
    }

    componentWillMount(){
        console.log(this.state.user.username)
        if(this.state.user.username === null){
            console.log(this.state.user.username)
            window.location = "/"
        }
    }

    render() {
        let u = this.state.user

        return (
            <div>
                <Navbar activeTab="Mostafa"/>
                <div className="container">
                    <div className="row mt-4">
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
                                            <li className="list-group-item"><b>ID: </b>{u.uuid}</li>
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
            </div>
        )
    }
}
