import { combineReducers } from 'redux'
const CHANGE_MAIN_PICTURE_VIDEO = 'CHANGE_MAIN_PICTURE_VIDEO'

const selectThumbnail = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_MAIN_PICTURE_VIDEO:
      return action.payload;
    default:
      return state;
  }
}

const gameReducer = combineReducers({ selectThumbnail })

export default gameReducer
