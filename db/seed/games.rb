# seed file for games
prefix = "http://res.cloudinary.com/dgwgbnszx/image/upload/v1484479033/game-project/"
games = [
    { icon: prefix + 'bad-land',
      name: 'bad land', game_id: '0'},
    { icon: prefix + 'space-marshal-2-icon',
      name: 'space marshal 2', game_id: '1'},
    { icon: prefix + 'zombie-age-3',
      name: 'zombie age 3', game_id: '2'},
    { icon: prefix + 'tap-tap-dash',
      name: 'tap tap dash', game_id: '3'},
    { icon: prefix + 'fruit-ninja',
      name: 'fruit ninja', game_id: '4'},
    { icon: prefix + 'candy-crush',
      name: 'candy crush saga', game_id: '5'},
    { icon: prefix + 'limbo',
      name: 'limbo', game_id: '6'},
    { icon: prefix + 'leo-fortune',
      name: 'leo-fortune', game_id: '7'},
    { icon: prefix + 'zombie-vs-plants',
      name: 'plants vs zombie 2', game_id: '8'},
    { icon: prefix + 'asphalt-8',
      name: 'asphalt 8', game_id: '9'},
    { icon: prefix + 'field-runners-2',
      name: 'field runners 2', game_id: '10'},
    { icon: prefix + 'bad-land',
      name: 'bad land', game_id: '11'}]

thumbnails = [
  { data: 'lvFyYHcyqOQ', type: 'video' },
  { data: 'IOO4v4GqH18', type: 'video' },
  { data: 'JwOkJs0jh2A', type: 'video' },
  { data: 'NAw6CR-2w7o', type: 'video' }
]

games.each do |game|
  Game.create(
    name: game[:name],
    icon: game[:icon]
  )
end


thumbnails.each do |thumbnail|
  Thumbnail.create(
    data: thumbnail[:data],
    media_type: 'video',
    game: Game.first )
end
