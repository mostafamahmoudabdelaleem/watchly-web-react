import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '@pwabuilder/pwaauth'
import { CONFIGS } from '../configs'
import { changeDocumentTitle } from '../js/seo-utils'
import { userLogin } from '../js/localStorage-utils'


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.pwa_auth_ref = React.createRef();
        changeDocumentTitle('Login')
    }

    componentDidMount(){
        const pwaAuth = document.querySelector("pwa-auth");
        pwaAuth.addEventListener("signin-completed", ev => {
            const signIn = ev.detail;
            if (signIn.error) {
                console.error("Sign in failed", signIn.error);
            } else {
                userLogin(signIn)
                this.props.history.push("/")
            }
        });
    }

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
                                ref={this.pwa_auth_ref}
                                appearance="list"
                                microsoftkey={CONFIGS.MICROSOFT_KEY}
                                googlekey={CONFIGS.GOOGLE_KEY}
                                facebookkey={CONFIGS.FACEBOOK_KEY}
                                applekey={CONFIGS.APPLE_KEY}
                                credentialmode="silent">
                            </pwa-auth>
                            <hr/>
                            <p 
                                className="text-muted text-center font-weight-light"
                                style={{marginBottom: "0", fontSize: "12px"}}
                            >
                                By signing in you are agreed to our <Link to="/privacy-policy">Privacy Policy</Link> and&nbsp;
                                <Link to="/terms-of-services">Terms of service</Link>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
