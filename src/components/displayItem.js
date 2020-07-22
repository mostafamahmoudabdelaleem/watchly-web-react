import React, { Component } from 'react'
import RatingBadge from './ratingBadge'
import QualityBadge from './qualityBadge'

export default class DisplayItem extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="col-6 col-sm-4 col-md-3 col-lg-2 display-list-item">
                    <a 
                        className="card bg-light text-white display-list-card"
                        href={this.props.item.link}>
                        <img 
                            src={this.props.item.img_link} 
                            className="card-img display-list-img" 
                            alt={this.props.item.name}/>
                        <div className="card-img-overlay">
                            <p className="card-title">{this.props.item.name}</p>
                            <QualityBadge quality={this.props.item.quality} />
                            <RatingBadge rating={this.props.item.rating} />
                        </div>
                    </a>
                </div>
            </React.Fragment>
        )
    }
}
