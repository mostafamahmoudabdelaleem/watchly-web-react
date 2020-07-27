import React, { Component } from 'react'
import DisplayItem from './displayItem'

export default class DisplayList extends Component {
    
    
    displayList = (list) => {
        console.log("displaying Items")
        list.map((item, i) => {
            return(
                <DisplayItem item={item} key={i}/>
            )
        })
    }


    
    
    render() {
        return (
            <React.Fragment>
                {this.props.list ? 
                    this.props.list.map((item, i) => {
                        return(
                            <DisplayItem 
                                item={item} 
                                key={i}
                                replace={this.props.replace}
                                with={this.props.with}
                                isSeries={this.props.isSeries}
                            />
                        )
                    })
                    :
                    <p className="text-center">No Item Found To Display</p>
                }
            </React.Fragment>
        )
    }
}
