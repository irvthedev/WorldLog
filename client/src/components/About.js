import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div className='container'>
        <h2>About this project</h2>
        <ul>
          <li><h4>This is a React project, code at available my <a href='https://github.com/irvthedev/WorldLog'>github</a></h4></li>
          <li><h4>Previous and future desinations will be saved in this application. The hope is to save <br />
          restaurants and attractions that are in each city, with hopefully a map with pins for the spots</h4></li>
          <li><h4>I think this project can have a very practical use. Let's see what happens</h4></li>
        </ul>
        
      </div>
    )
  }
}
