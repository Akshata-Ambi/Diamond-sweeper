import randomDiamondPositionGenerator from './js/randomPositionGenerator';
import diamondImage from './images/diamond.png';
import './css/style.css';

// Log message to console

const init = () => {
  // This line will generate 8 random positions of the diamond
  const randomPositions = randomDiamondPositionGenerator();
  console.log(randomPositions);
  //We are selecting the game container here
  const gameContainer =  document.querySelector('#game-container');

  //We are listening to event on the game container itself and using event delegation
  //rather than adding event to each div
  gameContainer.addEventListener('click', e => {

    //This checks make sure that the box is only clickable once as 
    //initially div with front class will be visible
    if(e.target.className === 'front'){

      //Here we are checking if the id of the clicked div
      //exists in our random position array
      if(randomPositions.includes(e.target.id)){

        //As children is a HTML collection we are using for of to iterate
        //Basically we will go up to the parent and then try to target its back child
        for(let child of e.target.parentElement.children){

          //Here we are checking if the child has back as class name
          if(child.className === 'back'){

            //We are adding diamond as the background image
            child.style =  `background-image: url(${diamondImage})`;
          }
        }
      }

      //We are adding this css style to the parent to give the rotate effect
      e.target.parentElement.style = "transform: rotateY(180deg)";
    }
  });
}
init();

// Needed for Hot Module Replacement
if(typeof(module.hot) !== 'undefined') {
  module.hot.accept(); 
}