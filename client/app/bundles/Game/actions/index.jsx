const CHANGE_MEDIA = 'CHANGE_MEDIA'
const SHOW_GAME = 'SHOW_GAME'

export const changeMedia = (payload) => ({
  type: CHANGE_MEDIA,
  payload
})

export const showGame = (payload) => ({
  type: SHOW_GAME,
  payload
})
