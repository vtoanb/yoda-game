import React, { Component } from 'react';
import Games from './game-card/game';
import Navigator from './navigators/navigator'

export default class GameApp extends Component{
  render(){
    return(
      <div className="row">
        <div className="col-lg-9">
          <Games />
        </div>
        <div className="col-lg-3">
          <Navigator />
        </div>
      </div>
    );
  }
}