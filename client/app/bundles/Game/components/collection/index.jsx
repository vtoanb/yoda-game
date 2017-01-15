// collection of games component
import React from 'react'
import GameWIcon from '../card-wicon/index'

const GameCollection = (props) => {
  const games = props.games.map( game => {
    return(
      <div className="col-lg-3" key= { game.game_id }>
        <GameWIcon
          game_icon_image = { game.game_icon_image }
          game_name = { game.game_name }
        />
      </div>
    )
  })
  return (
    <div className="row">
      { games }
    </div>
  )
}

export default GameCollection