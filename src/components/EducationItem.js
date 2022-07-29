import React, { Component } from "react";
import style from '../style/item.css'

class EducationItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="education-item-container">
                {this.props.educationList.map((education) => {
                return <div className="item-container">
                    <div className="item">{education.schoolName}</div>
                    <div className="item">{education.degree}</div>
                    <div className="item">{education.subject}</div>
                    <div className="item">{education.eduFrom}{education.eduTo}</div>
                </div>
                 })}
            </div>
        )
    }
}

export default EducationItem