import React from 'react';
import { Component } from 'react';
import './components/Header'
import Header from './components/Header';
import GeneralInfo from './components/General-informations';
import Education from './components/Education';
import Experience from './components/Experience'
import Preview from './components/CV-preview';

class App extends Component{
  state = {
    name: '',
    lastName: '',
    address: '',
    tel: '',
    email: '',
    description: '',
    educationList: [],
    experienceList: [],
  }
  callName = (childData) => {
    this.setState({name: childData})
  }
  callLastName = (childData) => {
    this.setState({lastName: childData})
  }
  callAddress = (childData) => {
    this.setState({address: childData})
  }
  callTel = (childData) => {
    this.setState({tel: childData})
  }
  callEmail = (childData) => {
    this.setState({email: childData})
  }
  callDescription = (childData) => {
    this.setState({description: childData})
  }
  callEducationList = (childData) => {
    this.setState({educationList: childData})
  }
  callExperienceList = (childData) => {
    this.setState({experienceList: childData})
  }
  render (){
    return(
      <div>
        <Header/> 
        <div className="main">
          <div className="container">
            <div className="left">
              <GeneralInfo parentCallName = {this.callName} parentCallLastName = {this.callLastName}
                           parenCallAddress = {this.callAddress} parentCallTel = {this.callTel}
                           parentCallEmail = {this.callEmail} parentCallDescription = {this.callDescription}/>
              <Education   parentCallEducationList = {this.callEducationList}/>
              <Experience  parentCallexperienceList = {this.callExperienceList}/>
            </div>
          </div>
          <div className="container">
            <div className="right">
              <Preview name = {this.state.name} lastName = {this.state.lastName}
                       address = {this.state.address} tel = {this.state.tel}
                       email = {this.state.email} description = {this.state.description}
                       educationList = {this.state.educationList}
                       experienceList = {this.state.experienceList}/>
            </div>  
          </div> 
        </div>   
      </div>
    )
  }
}

export default App;
