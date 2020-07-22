import React, { Component } from 'react'

export default class QualityBadge extends Component {
    render() {
        return (
            <span className="badge badge-success item-quality">{this.props.quality}</span>
        )
    }
}
