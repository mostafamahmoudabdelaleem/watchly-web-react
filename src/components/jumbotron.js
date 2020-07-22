import React, { Component } from 'react'

export default class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbotron" id="myPage">
                <div className="container text-center" style={{fontFamily: 'Pacifico, cursive'}}>
                    <h1>Watchly<span className="fas fa-play logo"></span></h1>      
                    <p>Enjoy, Entertain and Chill with the newest online movies,</p>
                    <p>series and shows in the world.</p>
                </div>
            </div>
        )
    }
}
