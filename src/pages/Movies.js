import React, { Component } from 'react'
import Navbar from '../components/navbar'
import '../css/Components.css';
import '../css/Components-media-575.css';
import '../css/Components-media-991.css';

export default class Movies extends Component {
    render() {
        return (
            <div>
                <Navbar activeTab="Movies"/>
                <h3>Movies</h3>
            </div>
        )
    }
}
