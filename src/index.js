import logMessage from './js';
import './css/style.css';

// Log message to console
logMessage('Welcome to Diamond Sweeper!');

// Needed for Hot Module Replacement
if(typeof(module.hot) !== 'undefined') {
  module.hot.accept(); 
}