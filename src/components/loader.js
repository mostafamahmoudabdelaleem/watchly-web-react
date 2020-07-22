import React, { Component } from 'react'

export default class Loader extends Component {
    render() {
        return (
            <div className="loader-container">
                <div className="loader">
                    <img src="/img/icon_192.png" width="192" alt="watchly logo" />
                    <div className="spinner-border text-light" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        )
    }
}
