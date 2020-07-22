import React from 'react'
import { useParams } from "react-router-dom";  
import Navbar from '../components/navbar'
import '../css/Components.css';
import '../css/Components-media-575.css';
import '../css/Components-media-991.css';

export default function Episode() {
    let { id } = useParams();
    let link = `https://eg4.akwam.net/episode/${id}`
    
    return (
        <div>
            <Navbar />
            <h3>Episode link: {link}</h3>
        </div>
    )
}
