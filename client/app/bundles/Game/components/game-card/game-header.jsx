import React from 'react'

const GameHeader = (props) => {
  const { game_name, game_icon_image } = props
  return(
    <div className="game-header">
      <img src= { game_icon_image } />
      <h2 className="u-inline align-bottom">{ game_name }</h2>
    </div>
  )
}

export default GameHeader