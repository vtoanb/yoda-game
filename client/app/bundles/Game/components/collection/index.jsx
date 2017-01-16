// collection of games component
import React from 'react'
import GameWIcon from '../card-wicon/index'
import './collection.scss'

const GameCollection = (props) => {
  const games = props.games.map( game => {
    return(
      <div className="col-md-2 col-sm-6" key= { game.game_id }>
        <GameWIcon
          game_icon_image = { game.game_icon_image }
          game_name = { game.game_name }
        />
      </div>
    )
  })
  return (
    <div className="row">
      <h3 className="col-md-12 collection-title">{props.title}</h3>
      { games }
    </div>
  )
}

export default GameCollection