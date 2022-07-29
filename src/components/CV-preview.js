import React, { Component } from "react";
import EducationItem from "./EducationItem";
import ExpItem from "./ExperienceItem";
import GeneralInfo from "./General-informations";
import style from '../style/preview.css'

class Preview extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="preview">
                <div className="name-container">
                    <div className="name">{this.props.name} {this.props.lastName}</div>
                </div>
                <div className="general-informations-container">
                    <div className="photo"></div>
                    <div className="title">Personal details</div>
                    <hr />
                    <div className="address">{this.props.address}</div>
                    <div className="phone">{this.props.tel}</div>
                    <div className="email">{this.props.email}</div>
                </div>
                <div className="rest-info">
                    <div className="title">Description</div>
                    <hr />
                    <div className="description-container">{this.props.description}</div>
                    <div className="title">Education</div>
                    <hr />
                    <EducationItem educationList = {this.props.educationList}/>
                    <div className="title">Experience</div>
                    <hr />
                    <ExpItem experienceList = {this.props.experienceList}/>
                </div>
            </div>
        )
    }
}

export default Preview