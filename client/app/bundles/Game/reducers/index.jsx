import { combineReducers } from 'redux'
const CHANGE_MEDIA = 'CHANGE_MEDIA'

const media = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_MEDIA:
      return action.payload
    default:
      return state;
  }
}

const game = (state= {}, action) => {
  switch (action.type) {
    case 'SHOW_GAME':
      return action.payload
    default:
      return state
  }
}

const gameReducer = combineReducers({ media, game })

export default gameReducer
