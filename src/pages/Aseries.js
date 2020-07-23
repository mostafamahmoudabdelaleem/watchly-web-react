import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";  
import Navbar from '../components/navbar'
import '../css/Components.css';
import '../css/Components-media-575.css';
import '../css/Components-media-991.css';

export default function Aseries() {
    let { id, name } = useParams();
    let link = `https://eg4.akwam.net/series/${id}/${name}`


    useEffect(() => {
        document.title = `Watchly - ${name}`
    })
    
    return (
        <div>
            <Navbar />
            <h3>Series link: {link}</h3>
        </div>
    )
}
