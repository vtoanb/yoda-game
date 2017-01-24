// collection of games component
import React from 'react'
import GameWIcon from '../../containers/game-wicon-container'
import './collection.scss'

const GameCollection = (props) => {
  const games = props.games.map( game => {
    return(
      <div className="col-md-2 col-sm-6" key= { game.id }>
        <GameWIcon
          id = { game.id }
          icon = { game.icon }
          name = { game.name }
          thumbnail = { game.thumbnails[0] }
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
