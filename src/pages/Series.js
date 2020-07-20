import React, { Component } from 'react'
import Navbar from '../components/navbar'
import '../css/Components.css';
import '../css/Components-media-575.css';
import '../css/Components-media-991.css';

export default class Series extends Component {
    render() {
        return (
            <div>
                <Navbar activeTab="Series"/>
                <h3>Series</h3>
            </div>
        )
    }
}
