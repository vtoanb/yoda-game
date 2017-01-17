import React, {Component} from 'react'
import GameHeader from './game-card/game-header'
import InteractiveBar from './game-card/interaction'
import Gallary from './gallary/index'

class ShowGame extends Component {
  render() {
    const thumbnails = [
      {type: 'video', data: "2-KXXMsJWoo"},
      {type: 'video', data: "vCebXPSduZ4"},
      {type: 'video', data: "JpDi_cqDLfE"}
    ]

    return (
      <div>
        <Gallary thumbnails={ thumbnails } />
      </div>
    )
  }
}

export default ShowGame