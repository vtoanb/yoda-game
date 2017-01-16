import React from 'react'
import Collection from './collection/index'

const Home = () => {
  const prefix = `http://res.cloudinary.com/dgwgbnszx/image/upload/v1484479033/game-project/`
  const games = [
    { game_icon_image: prefix + 'bad-land',
      game_name: 'bad land', game_id: '0'},
    { game_icon_image: prefix + 'space-marshal-2-icon',
      game_name: 'space marshal 2', game_id: '1'},
    { game_icon_image: prefix + 'zombie-age-3',
      game_name: 'zombie age 3', game_id: '2'},
    { game_icon_image: prefix + 'tap-tap-dash',
      game_name: 'tap tap dash', game_id: '3'},
    { game_icon_image: prefix + 'fruit-ninja',
      game_name: 'fruit ninja', game_id: '4'},
    { game_icon_image: prefix + 'candy-crush',
      game_name: 'candy crush saga', game_id: '5'},
    { game_icon_image: prefix + 'limbo',
      game_name: 'limbo', game_id: '6'},
    { game_icon_image: prefix + 'leo-fortune',
      game_name: 'leo-fortune', game_id: '7'},
    { game_icon_image: prefix + 'zombie-vs-plants',
      game_name: 'plants vs zombie 2', game_id: '8'},
    { game_icon_image: prefix + 'asphalt-8',
      game_name: 'asphalt 8', game_id: '9'},
    { game_icon_image: prefix + 'field-runners-2',
      game_name: 'field runners 2', game_id: '10'},
    { game_icon_image: prefix + 'bad-land',
      game_name: 'bad land', game_id: '11'}]
  return (
    <div className="col-lg-10">
      <Collection games={ games } title="top android game"/>
    </div>
  )
}

export default Home