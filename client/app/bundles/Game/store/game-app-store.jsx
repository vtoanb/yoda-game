import { createStore } from 'redux'
import gameReducer from '../reducers/index'

const configureStore = (railsProps) => (
  createStore(gameReducer, railsProps)
)

export default configureStore
