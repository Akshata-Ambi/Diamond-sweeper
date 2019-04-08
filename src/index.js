import randomDiamondPositionGenerator from './js/randomPositionGenerator';
import './css/style.css';

// Log message to console
console.log(randomDiamondPositionGenerator());

// Needed for Hot Module Replacement
if(typeof(module.hot) !== 'undefined') {
  module.hot.accept(); 
}