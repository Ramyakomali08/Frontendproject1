import React, { Component } from 'react'
import{Link}from'react-router-dom'
import.'/css/Page2.css'

export default class  extends Component {
  render() {
    return (
      <div className='main1'>
        <h1>Welcome to my world</h1>
        <br/><br/>
        <Link to="/Page1">Go to Page1</Link>
        <br/><br/>
        <Link to="/Page2">Go to Homepage</Link>
        <br/><br/>
      </div>
    )
  }
}
