import { combineReducers } from 'redux'
const CHANGE_MEDIA = 'CHANGE_MEDIA'
const SHOW_GAME = 'SHOW_GAME'

const media = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_MEDIA:
      return action.payload
    default:
      return state
  }
}

const games = (state= {}, action) => {
  switch (action.type) {
    case SHOW_GAME:
      return action.payload
    default:
      return state
  }
}

const gameReducer = combineReducers({ media, games })

export default gameReducer
