import React, { Component } from 'react'
import Games from './game-card/game'
import Navigator from './navigators/navigator'
import NavBar from './navbar/index'

export default class App extends Component{
  render(){
    return(
      <div className="container">
        <div className="row">
          <NavBar />
        </div>
        <div className="row">
          <div className="col-lg-9">
            { this.props.children }
          </div>
        </div>
      </div>
    );
  }
}