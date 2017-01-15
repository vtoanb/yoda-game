import React, {Component} from 'react'
import Gallary from './gallary/gallary'
import GameHeader from './game-card/game-header'
import InteractiveBar from './game-card/interaction'

class ShowGame extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-6">
            <GameHeader />
          </div>
          <InteractiveBar className="col-sm-6"/>
        </div>
        <Gallary />
      </div>
    )
  }
}

export default ShowGame