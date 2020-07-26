import React, { useEffect } from 'react'
import { useParams } from "react-router-dom"
import { CONFIGS } from '../configs'
import { changeDocumentTitle, changeMetaImg, changeMetaURL } from '../js/seo-utils'
import Navbar from '../components/navbar'
import '../css/Components.css';
import '../css/Components-media-575.css';
import '../css/Components-media-991.css';

export default function Aseries() {
    let { id, name } = useParams();
    let link = `https://eg4.akwam.net/series/${id}/${name}`;
    const allSeries = JSON.parse(localStorage.getItem(CONFIGS.LOCAL_SERIES_KEY));
    const s = allSeries.find((item) => item.link === link);
    

    useEffect(() => {
        changeDocumentTitle(name);
        changeMetaImg(s.img_link);
        changeMetaURL(window.location);
    })
    

    
    
    return (
        <div>
            <Navbar />
            <h3>Series link: {link}</h3>
        </div>
    )
}
