import React, { Component } from 'react'
import "./App.css"

export default class App extends Component {
  state={value:0}
  onChangeSearchInput = event => {
    this.setState({
      value: event.target.value.length
    })
  }
  render() {
    const {value}=this.state
    return (
      <div className='container'>
        <div className='items-container'>
        <h1 className="heading">Calculate the Letters you enter</h1>
        <p className='para'>Enter the phrase</p>
        <input type="search" className='input-element'  onChange={this.onChangeSearchInput} placeholder="Enter keyword"/>
        <div className='container-2'> 
        <p className='para-2'>No.of letters:<span className='para-2'>
          {value}
        </span>
          </p>
          </div>
         
        </div>
        <img src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png" alt="letters"/>
      </div>
    )
  }
}

