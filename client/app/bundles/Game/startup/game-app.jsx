import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from '../components/app'
import Games from '../components/game-card/game'
import ShowGame from '../components/show'
import Home from '../components/home'

const GameApp = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/games" component={ShowGame}/>
      </Route>
    </Router>
  );
};

export default GameApp