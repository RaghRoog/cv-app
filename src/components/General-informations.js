import React, { Component } from "react";
import style from '../style/left-style.css'
import Preview from "./CV-preview";

class GeneralInfo extends Component{
    sendData = () => {
        this.props.parentCallName(this.state.name);
        this.props.parentCallLastName(this.state.lastName)
        this.props.parenCallAddress(this.state.address)
        this.props.parentCallTel(this.state.tel)
        this.props.parentCallEmail(this.state.email)
        this.props.parentCallDescription(this.state.description)
    }
    constructor(props){
        super(props);

        this.state = {
            name: '',
            lastName: '',
            address: '',
            tel: '',
            email: '',
            description: ''
        }
    }
    handleNameChange = (event) => {
        this.setState({name: event.target.value})
    }
    handleLastNameChange = (event) => {
        this.setState({lastName: event.target.value})
    }
    handleAddressChange = (event) => {
        this.setState({address: event.target.value})
    }
    handleTelChange = (event) => {
        this.setState({tel: event.target.value})
    }
    handleEmailChange = (event) => {
        this.setState({email: event.target.value})
    }
    handleDescriptionChange = (event) => {
        this.setState({description: event.target.value})
    }
    render(){
        return(
            <div className="input-container">
                <div>Personal informations</div>
                <input onChange={this.handleNameChange} type="text" name="name" id="name" placeholder="Name"/>
                <input onChange={this.handleLastNameChange} type="text" name="last-name" id="last-name" placeholder="Last name"/>
                <input onChange={this.handleAddressChange} type="text" name="address" id="address" placeholder="Address"/>
                <input onChange={this.handleTelChange} type="tel" name="phone" id="phone" placeholder="Phone number"/>
                <input onChange={this.handleEmailChange} type="email" name="email" id="email" placeholder="Email"/>
                <textarea onChange={this.handleDescriptionChange} name="description" id="description" cols="30" rows="10" placeholder="Description"></textarea>
                <button onClick={this.sendData}>Submit</button>
            </div>
        )
    }
}

export default GeneralInfo