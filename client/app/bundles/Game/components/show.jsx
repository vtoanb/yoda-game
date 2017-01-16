import React, {Component} from 'react'
import GameHeader from './game-card/game-header'
import InteractiveBar from './game-card/interaction'
import Gallary from './gallary/index'

class ShowGame extends Component {
  render() {
    return (
      <div>
        <Gallary />
      </div>
    )
  }
}

export default ShowGame