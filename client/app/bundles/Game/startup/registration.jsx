import ReactOnRails from 'react-on-rails';

import HelloWorldApp from './HelloWorldApp';
import Games from '../components/game'

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  Games,
});
