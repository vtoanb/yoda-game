import React, { PropTypes } from 'react';
import InteractiveBar from './interaction';
import GameHeader from './game-header';
import GamePlay from './game-play';

export default class Games extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-3 h-200">
            <GamePlay />
          </div>
          <div className="col-sm-6 h-200 card-block">
            <GameHeader />
            <InteractiveBar />
          </div>
        </div>
      </div>
    );
  }
}
