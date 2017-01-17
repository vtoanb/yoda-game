import { createStore } from 'redux'
import gameReducer from '../reducers/index'

const configureStore = (railsProps) => (
  createStore(gameReducer, railsProps, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

export default configureStore
