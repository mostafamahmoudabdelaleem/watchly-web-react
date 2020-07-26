import React from 'react'
import { useParams } from "react-router-dom";
import { changeDocumentTitle } from '../js/seo-utils'
import Navbar from '../components/navbar'
import '../css/Components.css';
import '../css/Components-media-575.css';
import '../css/Components-media-991.css';

export default function Movie() {
    let { id, name } = useParams();
    let link = `https://eg4.akwam.net/movie/${id}/${name}`

    changeDocumentTitle(name);

    return (
        <div>
            <Navbar />
            <h3>Movie link: {link}</h3>
        </div>
    )
}
