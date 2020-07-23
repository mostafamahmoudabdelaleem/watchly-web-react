import React, { Component } from 'react'
import '@pwabuilder/pwaauth'
import { CONFIGS } from '../configs'

var md5 = require('md5')

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.pwa_auth_ref = React.createRef();
        document.title = `Watchly - Login`
    }

    componentDidMount(){
        const pwaAuth = document.querySelector("pwa-auth");
        pwaAuth.addEventListener("signin-completed", ev => {
            const signIn = ev.detail;
            if (signIn.error) {
                console.error("Sign in failed", signIn.error);
            } else {
                localStorage.setItem(CONFIGS.LOCAL_UUID_KEY, md5(signIn.email))
                localStorage.setItem(CONFIGS.LOCAL_USER_EMAIL_KEY, signIn.email)
                localStorage.setItem(CONFIGS.LOCAL_USER_NAME_KEY, signIn.name)
                if(signIn.imageUrl === null){
                    localStorage.setItem(
                        CONFIGS.LOCAL_USER_PIC_KEY, 
                        ('https://via.placeholder.com/300.webp/eee/999?text=' + signIn.name[0])
                    )
                }else{
                    localStorage.setItem(CONFIGS.LOCAL_USER_PIC_KEY, signIn.imageUrl)
                }
                localStorage.setItem(CONFIGS.LOCAL_USER_AUTH_PROVIDER_KEY, signIn.provider)
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
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
