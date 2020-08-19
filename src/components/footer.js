import React, { Component } from 'react'
import {version} from '../../package.json';

export default class Footer extends Component {
    constructor(props){
        super(props)
        this.state = {
            className: "container-fluid text-center footer"
        }
    }
    
    componentDidMount(){
        let body = document.body,
        html = document.documentElement;

        let height = Math.max( body.scrollHeight, body.offsetHeight, 
            html.clientHeight, html.scrollHeight, html.offsetHeight );

        if(height <= window.innerHeight){
            this.setState({
                className: "container-fluid text-center footer footer-sticky"
            })
        }
    }

    render() {

        return (
            <footer className={ this.state.className }>
                <p>Copyright © 2020 Watchly - All Rights Reserved - v{version}</p>
            </footer>
        )
    }
}
