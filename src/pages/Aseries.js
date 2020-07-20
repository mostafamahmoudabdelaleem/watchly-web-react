import React from 'react'
import { useParams } from "react-router-dom";  
import Navbar from '../components/navbar'
import '../css/Components.css';
import '../css/Components-media-575.css';
import '../css/Components-media-991.css';

export default function Aseries() {
    let { id } = useParams();
    return (
        <div>
            <Navbar />
            <h3>Series name: {id}</h3>
        </div>
    )
}
