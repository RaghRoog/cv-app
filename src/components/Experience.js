import React, { Component } from "react";
import style from '../style/left-style.css'

class Experience extends Component{
    sendExperienceData = () => {
        this.props.parentCallexperienceList(this.state.experienceList)
    }
    constructor(props){
        super(props);
        this.state = {
            experienceInfo: {
                company: '',
                companyCity: '',
                position: '',
                workFrom: '',
                workTo: '',
            },
            experienceList: [],
            type: 'text',
            CValue: '',
            CCValue: '',
            PValue: '',
            WFValue: '',
            WTValue: '',
        }
    }
    handleCompanyChange = (event) => {
        this.setState(prevState => ({
            experienceInfo: {                     
              ...prevState.experienceInfo,  
              company: event.target.value          
            },
            CValue: event.target.value
        }))
    }
    handleCompanyCityChange = (event) => {
        this.setState(prevState => ({
            experienceInfo: {                     
              ...prevState.experienceInfo,  
              companyCity: event.target.value          
            },
            CCValue: event.target.value
        }))
    }
    handlePositionChange = (event) => {
        this.setState(prevState => ({
            experienceInfo: {                     
              ...prevState.experienceInfo,  
              position: event.target.value          
            },
            PValue: event.target.value
        }))
    }
    handleWorkFromChange = (event) => {
        this.setState(prevState => ({
            experienceInfo: {                     
              ...prevState.experienceInfo,  
              workFrom: event.target.value          
            },
            WFValue: event.target.value
        }))
    }
    handleWorkToChange = (event) => {
        this.setState(prevState => ({
            experienceInfo: {                     
              ...prevState.experienceInfo,  
              workTo: ' - ' + event.target.value          
            },
            WTValue: event.target.value
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
            experienceList: this.state.experienceList.concat(this.state.experienceInfo),
            experienceInfo: {
                company: '',
                companyCity: '',
                position: '',
                workFrom: '',
                workTo: '',
              },
            CValue: '',
            CCValue: '',
            PValue: '',
            WFValue: '',
            WTValue: '',
        })
    }
    removeLast = () => {
        let div = document.querySelector('.experience-item-container')
        div.removeChild(div.lastElementChild)
    }
    render(){
        return(
            <div className="input-container">
                <div className="input-description">Experience</div>
                <input value={this.state.CValue} onChange={this.handleCompanyChange} type="text" name="company" id="company" placeholder="Company"/>
                <input value={this.state.CCValue} onChange={this.handleCompanyCityChange} type="text" name="company-city" id="company-city" placeholder="City" />
                <input value={this.state.PValue} onChange={this.handlePositionChange} type="text" name="position" id="position" placeholder="position" />
                <input value={this.state.WFValue} onChange={this.handleWorkFromChange} type={this.state.type} name="work-from" id="work-from" placeholder="From" onFocus={this.changeStateToDate} onBlur={this.changeStateToText}/>
                <input value={this.state.WTValue} onChange={this.handleWorkToChange} type={this.state.type} name="work-to" id="work-to" placeholder="To" onFocus={this.changeStateToDate} onBlur={this.changeStateToText}/>
                <div className="btn-description">In order to add, fulfill all fields, then click on 'Add' button. To add multiple times repeat that steps. If everything is added click 'Submit' button.</div>
                <div className="button-container">
                    <button onClick={this.AddingToList}>Add</button>
                    <button onClick={this.sendExperienceData}>Submit</button>
                    <button onClick={this.removeLast}>Remove last</button>
                </div>
            </div>
        )
    }
}

export default Experience