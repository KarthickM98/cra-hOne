// import logo from './logo.svg';
import './App.css';
import FunctionCC from './Component/FunctionComp';
import ClassCC from './Component/ClassComp';
import HeaderCop from './Component/HeaderCop';
import React, { Component } from 'react'

class App extends Component {
  constructor(){
    super();
    this.state={
      displayOne:false,
      displayTwo:false
    }
  }
  displaycompOne(){
    this.setState({
      displayOne:!this.state.displayOne
    })
  }
  displaycompTwo(){
    this.setState({
      displayTwo:!this.state.displayTwo
    })
  }
  render() {
    return (
      <div className='App'>
        <HeaderCop />
        <button className='btn1' onClick={()=>this.displaycompOne()} >to see styling in functional component </button>
        <button className='btn2' onClick={()=>this.displaycompTwo()} >to see styling in class component </button>
        <div className='content'>
          {
            this.state.displayOne?<FunctionCC/>:null
          }
          {
            this.state.displayTwo?<ClassCC/>:null
          }
        </div>
      </div>
    )
  }
}

export default App

