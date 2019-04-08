import randomDiamondPositionGenerator from './js/randomPositionGenerator';
import diamondImage from './images/diamond.png';
import './css/style.css';

// Log message to console

const init = () => {
  // This line will generate 8 random positions of the diamond
  const randomPositions = randomDiamondPositionGenerator();
  
  //counting number of boxes left
  let boxesLeft = 64;
  let diamondsLeft = 8;

  //We are selecting the rules container here
  const rulesContainer = document.getElementsByClassName('rules')[0];

  //we are selecting the score container here
  const resultContainer = document.querySelector('#result-container');

  //We are selecting the score
  const score = document.querySelector('#score');

  //We are selecting the game container here
  const gameContainer = document.querySelector('#game-container');

  const onClick = e => {
    //Decreasing the number of boxes for each click
    boxesLeft--;

    //This checks make sure that the box is only clickable once as 
    //initially div with front class will be visible
    if (e.target.className === 'front') {

      //Here we are checking if the id of the clicked div
      //exists in our random position array
      if (randomPositions.includes(e.target.id)) {

        //As children is a HTML collection we are using for of to iterate
        //Basically we will go up to the parent and then try to target its back child
        for (let child of e.target.parentElement.children) {

          //Here we are checking if the child has back as class name
          if (child.className === 'back') {

            //We are adding diamond as the background image
            child.style = `background-image: url(${diamondImage})`;
          }
        }

        //Reducing number of diamonds left
        diamondsLeft--;
        if (diamondsLeft === 0) {
          //Hiding the rules container
          rulesContainer.style = "display: none";
          //Showing the score container
          resultContainer.style = "display: block";
          score.innerHTML = boxesLeft;
          //removing event listener when there is no diamond left
          gameContainer.removeEventListener('click', onClick);
        }
      }

      //We are adding this css style to the parent to give the rotate effect
      e.target.parentElement.style = "transform: rotateY(180deg)";
    }
  }

  //We are listening to event on the game container itself and using event delegation
  //rather than adding event to each div
  gameContainer.addEventListener('click', onClick);
}
init();

// Needed for Hot Module Replacement
if (typeof (module.hot) !== 'undefined') {
  module.hot.accept();
}