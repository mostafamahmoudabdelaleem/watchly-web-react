import React, { Component } from 'react'
import Navbar from '../components/navbar'
import '../css/Components.css';
import '../css/Components-media-575.css';
import '../css/Components-media-991.css';

export default class Profile extends Component {
    render() {
        return (
            <div>
                <Navbar activeTab="Mostafa"/>
                <h3>Profile</h3>
            </div>
        )
    }
}
