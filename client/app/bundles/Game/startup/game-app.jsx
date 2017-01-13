import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from '../components/app'
import Games from '../components/game-card/game'
import ShowGame from '../components/show'

const GameApp = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Games}/>
        <Route path="/games" component={ShowGame}/>
      </Route>
    </Router>
  );
};

export default GameApp