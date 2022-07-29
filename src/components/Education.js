import React, { Component } from "react";
import style from '../style/left-style.css'

class Education extends Component{
    sendEducationData = () => {
        this.props.parentCallEducationList(this.state.educationList);
    }
    constructor(props) {
        super(props);
        this.state = {
            educationInfo: {
                schoolName: '',
                degree: '',
                subject: '',
                eduFrom: '',
                eduTo: '',
            },
            educationList: [],
            type: 'text',
            SNValue: '',
            DValue: '',
            SValue: '',
            EFValue: '',
            ETValue: '',
        }
    }
    handleSchoolNameChange = (event) => {
        this.setState(prevState => ({
            educationInfo: {                     
              ...prevState.educationInfo,  
              schoolName: event.target.value          
            },
            SNValue: event.target.value
        }))
    }
    handleDegreeChange = (event) => {
        this.setState(prevState => ({
            educationInfo: {                     
              ...prevState.educationInfo,  
              degree: event.target.value          
            },
            DValue: event.target.value
        }))
    }
    handleSubjectChange = (event) => {
        this.setState(prevState => ({
            educationInfo: {                     
              ...prevState.educationInfo,  
              subject: event.target.value          
            },
            SValue: event.target.value
        }))
    }
    handleEduFromChange = (event) => {
        this.setState(prevState => ({
            educationInfo: {                     
              ...prevState.educationInfo,  
              eduFrom: event.target.value          
            },
            EFValue: event.target.value
        }))
    }
    handleEduToChange = (event) => {
        this.setState(prevState => ({
            educationInfo: {                     
              ...prevState.educationInfo,  
              eduTo: ' - ' + event.target.value         
            },
            ETValue: event.target.value
        }))
    }
    changeStateToDate = () => {
        this.setState({
            type: 'month'
        })
    }
    changeStateToText = () => {
        this.setState({
            type: 'text'
        })
    }
    AddingToList = () => {
        this.setState({
            educationList: this.state.educationList.concat(this.state.educationInfo),
            educationInfo: {
                schoolName: '',
                degree: '',
                subject: '',
                eduFrom: '',
                eduTo: '',
              },
            SNValue: '',
            DValue: '',
            SValue: '',
            EFValue: '',
            ETValue: '',
        })
    }
    removeLast = () => {
        let div = document.querySelector('.education-item-container')
        div.removeChild(div.lastElementChild)
    }
    render(){
        return(
            <div className="input-container">
                <div className="input-description">Education</div>
                <input value={this.state.SNValue} onChange={this.handleSchoolNameChange} type="text" name="university" id="university" placeholder="University name" />
                <input value={this.state.DValue} onChange={this.handleDegreeChange} type="text" name="degree" id="degree" placeholder="Degree" />
                <input value={this.state.SValue} onChange={this.handleSubjectChange} type="text" name="subject" id="subject" placeholder="Subject"/>
                <input value={this.state.EFValue} onChange={this.handleEduFromChange} type={this.state.type} name="education-from" id="education-from" placeholder="From" onFocus={this.changeStateToDate} onBlur={this.changeStateToText}/>
                <input value={this.state.ETValue} onChange={this.handleEduToChange} type={this.state.type} name="education-to" id="education-to" placeholder="To" onFocus={this.changeStateToDate} onBlur={this.changeStateToText}/>
                <div className="btn-description">In order to add, fulfill all fields, then click on 'Add' button. To add multiple times repeat that steps. If everything is added click 'Submit' button.</div>
                <div className="button-container">
                    <button onClick={this.AddingToList}>Add</button>
                    <button onClick={this.sendEducationData}>Submit</button>
                    <button onClick={this.removeLast}>Remove last</button>
                </div>
            </div>
        )
    }
}

export default Education