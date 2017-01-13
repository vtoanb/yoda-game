import React, { Component } from 'react'
import Games from './game-card/game'
import Navigator from './navigators/navigator'
import NavBar from './navbar/index'

export default class GameApp extends Component{
  render(){
    return(
      <div>
        <div className="row">
          <NavBar />
        </div>
        <div className="row">
          <div className="col-lg-9">
            <Games />
          </div>
          <div className="col-lg-3">
            <Navigator />
          </div>
        </div>
      </div>
    );
  }
}