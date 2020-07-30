import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className={this.props.sticky === "true" ? "container-fluid text-center footer footer-sticky" : "container-fluid text-center footer"}>
                <p>Copyright © 2020 Watchly - All Rights Reserved.</p>
            </footer>
        )
    }
}
