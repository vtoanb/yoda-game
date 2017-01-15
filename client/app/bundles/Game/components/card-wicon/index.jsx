import React from 'react'

const GameWIcon = (props) => {
  const { game_icon_image, game_name } = props
  return (
    <div className="card">
      <div className="card-block">
        <img className="card-img-top" src = { game_icon_image } />
      </div>
      <div className="card-block">
        <p className="card-title">{ game_name }</p>
      </div>
    </div>
  )
}

export default GameWIcon