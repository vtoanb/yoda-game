import ReactOnRails from 'react-on-rails';

import HelloWorldApp from './HelloWorldApp';
import GameApp from './game-app';
import Games from '../components/game-card/game';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  GameApp,
});
