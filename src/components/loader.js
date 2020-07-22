import React, { Component } from 'react'

export default class Loader extends Component {
    render() {
        return (
            <div className="loader-container">
                <div className="loader">
                    <div className="spinner-border text-light" role="status"></div>
                    <p>Loading</p>
                </div>
            </div>
        )
    }
}
