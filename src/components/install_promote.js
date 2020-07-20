import React, { Component } from 'react';
import '../css/Components.css';
import '../css/Components-media-575.css';

export default class InstallPromote extends Component {
    constructor(props){
        super(props);
        this.state = {
            divIsHidden: true,
            deferredPrompt: null,
        }
        var promptEvent;
    }

    componentDidMount(){
        window.addEventListener('beforeinstallprompt', (e) => {
            // Prevent the mini-infobar from appearing on mobile
            e.preventDefault();
            // Stash the event so it can be triggered later.
            this.setState({deferredPrompt: e});
            this.promptEvent = e;
            // Update UI notify the user they can install the PWA
            this.showInstallPromote();
        });
        window.addEventListener('appinstalled', (evt) => {
            // Log install to analytics
            console.log('INSTALL: Success');
        });
    }

    hideInstallPromote = () => {
        this.setState({divIsHidden: true});
    }

    showInstallPromote = () => {
        this.setState({divIsHidden: false});
    }

    installApp = () => {
        // Hide the app provided install promotion
        this.hideInstallPromote();
        this.deferredPrompt.prompt();
        this.promptEvent.prompt();
        // Wait for the user to respond to the prompt
        this.deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }
        });

        this.promptEvent.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }
        });
    }

    render() {
        return (
            <div id="installPromote" className="install-promote-container" hidden={this.state.divIsHidden}>
                <div className="row">
                    <div className="col-xs-10">
                        <p>You can install this app on your device.</p>
                    </div>
                    <div className="col-xs-2">
                        <button 
                            className="btn btn-secondary install-button"
                            onClick={this.installApp}>
                            <i className="fas fa-download"></i>
                            &ensp;Install
                        </button>
                    </div>
                    <div className="install-promote-close">
                        <button 
                            className="close" 
                            style={{ color: "#fff"}}
                            onClick={this.hideInstallPromote}>
                            <span>&times;</span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
