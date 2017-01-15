import React from 'react'
import Collection from './collection/index'

const Home = () => {
  const games = [
    { game_icon_image: 'http://res.cloudinary.com/dgwgbnszx/image/upload/c_scale,w_160/v1484023817/unnamed_1_zymmtr.webp',
      game_name: 'bad land', game_id: '0'},
    { game_icon_image: 'http://res.cloudinary.com/dgwgbnszx/image/upload/c_scale,w_160/v1484023817/unnamed_1_zymmtr.webp',
      game_name: 'bad land', game_id: '1'},
    { game_icon_image: 'http://res.cloudinary.com/dgwgbnszx/image/upload/c_scale,w_160/v1484023817/unnamed_1_zymmtr.webp',
      game_name: 'bad land', game_id: '2'}]
  return (
    <div>
      <h1>New added games</h1>
      <Collection games={ games }/>
    </div>
  )
}

export default Home