import React, { Component } from 'react'

export default class RatingBadge extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.rating === "0.0" || this.props.rating === "None" ?
                        ""
                    :
                        <span className="badge badge-warning item-rating">{this.props.rating}</span>
                }
            </React.Fragment>
        )
    }
}
