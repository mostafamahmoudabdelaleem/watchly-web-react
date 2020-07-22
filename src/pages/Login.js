import React, { Component } from 'react'
import '@pwabuilder/pwaauth'
import { CONFIGS } from '../configs'

export default class Login extends Component {
    render() {
        return (
            <div className="container-fluid loader-container">
                <div className="row">
                    <div 
                        className="card col-10 col-sm-8 col-md-6 col-lg-4 offset-1 offset-sm-2 offset-md-3 offset-lg-4 shadow"
                        style={{ position: "absolute", top: "25%" }}>
                        <div className="card-header fg-orange">
                            <b>
                                <i className="fas fa-sign-in-alt"></i> Signin
                            </b>
                        </div>
                        <div className="card-body">
                            <pwa-auth 
                                appearance="list"
                                microsoftkey={CONFIGS.MICROSOFT_KEY}
                                googlekey={CONFIGS.GOOGLE_KEY}
                                facebookkey={CONFIGS.FACEBOOK_KEY}
                                applekey={CONFIGS.APPLE_KEY}>
                            </pwa-auth>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
