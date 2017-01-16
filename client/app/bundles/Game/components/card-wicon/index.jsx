import React from 'react'

const GameWIcon = (props) => {
  const { game_icon_image, game_name } = props
  return (
    <div>
      <img className="card-img-top" src = { game_icon_image } />
      <p className="card-title">{ game_name }</p>
    </div>
  )
}

export default GameWIcon