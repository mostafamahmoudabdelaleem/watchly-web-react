import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import RatingBadge from './ratingBadge'
import QualityBadge from './qualityBadge'

export default class DisplayItem extends Component {

    generateLink = (link) => {
        if(this.props.replace === "undefined" && this.props.with === "undefined"){
            return link.split("https://eg4.akwam.net", 2)[1]
        }else{
            return (link.split("https://eg4.akwam.net", 2)[1]).replace(this.props.replace, this.props.with)
        }
    }


    render() {
        return (
            <React.Fragment>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2 display-list-item">
                    <Link 
                        className="card bg-light text-white display-list-card"
                        to={this.generateLink(this.props.item.link)}>
                        <img 
                            src={this.props.item.img_link} 
                            className="card-img display-list-img" 
                            alt={this.props.item.name}/>
                        <div className="card-img-overlay">
                            <p className="card-title">{this.props.item.name}</p>
                            <QualityBadge quality={this.props.item.quality} />
                            <RatingBadge rating={this.props.item.rating} />
                        </div>
                    </Link>
                </div>
            </React.Fragment>
        )
    }
}
