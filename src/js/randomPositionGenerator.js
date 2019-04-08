const generateDiamondPositions = () => {
    const totalNumberOfDiamonds = 8;
    const diamondPositionArray = [];
    let randomPosition = 0;
    let i=0;

    while(i<totalNumberOfDiamonds){
      randomPosition = Math.ceil(Math.random()*64);
      if(!diamondPositionArray.includes(`tiles-${randomPosition}`)){
        diamondPositionArray.push(`tiles-${randomPosition}`);
        i++;
      }
    }
    return diamondPositionArray;
}

export default generateDiamondPositions;