import React from 'react'
import ReactOnRails from 'react-on-rails'
import { Provider } from 'react-redux'
import configureStore from '../store/game-app-store'
import GallaryContainer from '../containers/gallary-container'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from '../components/app'
// import Games from '../components/game-card/game'
import ShowGame from '../components/show'
import Home from '../components/home'

const GameApp = (props, __railsContext) => (
  <Provider store={configureStore(props)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/games" component={ShowGame}/>
      </Route>
    </Router>
  </Provider>
)

export default GameApp
