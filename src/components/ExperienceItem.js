import React, { Component } from "react";
import style from '../style/item.css'

class ExpItem extends Component{
    constructor (props) {
        super(props);
    }
    render(){
        return(
            <div className="experience-item-container">
                {this.props.experienceList.map((experience) => {
                return <div className="item-container">
                    <div className="item">{experience.company}</div>
                    <div className="item">{experience.companyCity}</div>
                    <div className="item">{experience.position}</div>
                    <div className="item">{experience.workFrom}{experience.workTo}</div>
                </div>
                 })}
            </div>
        )
    }
}

export default ExpItem