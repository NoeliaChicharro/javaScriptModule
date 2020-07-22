/* Functionality */
function move(num, pos) {
  // check if cell can be moved down
  if (num === 0 || num === 1 || num === 2 || num === 3 || num === 4 || num === 5){
    let cellBelow = num + 3;
    if (document.images[cellBelow].src.indexOf('blinde.gif') != -1){
      console.info('down');
      let blindCell = document.images[cellBelow].src;
      document.images[cellBelow].src = document.images[num].src;
      document.images[num].src = blindCell;
      return;
    }
  }

  // check if cell can be moved up
  if (num === 3 || num === 4 || num === 5 || num === 6 || num === 7 || num === 8){
    console.info('up');
    let cellAbove = num -3;
    if (document.images[cellAbove].src.indexOf('blinde.gif') != -1){
      let blindCell = document.images[cellAbove].src;
      document.images[cellAbove].src = document.images[num].src;
      document.images[num].src = blindCell;
      return;
    }
  }

  // check if cell can be moved to the right
  if (num === 0 || num === 1 || num === 3 || num === 4 || num === 6 || num === 7){
    console.info('right');
    let cellRight = num + 1;
    if (document.images[cellRight].src.indexOf('blinde.gif') != -1){
      let blindCell = document.images[cellRight].src;
      document.images[cellRight].src = document.images[num].src;
      document.images[num].src = blindCell;
      return;
    }
  }

  // check if cell can be moved to the left
  if (num === 1 || num === 2 || num === 4 || num === 5 || num === 7 || num === 8){
    console.info('left');
    let cellLeft = num - 1;
    if (document.images[cellLeft].src.indexOf('blinde.gif') != -1){
      let blindCell = document.images[cellLeft].src;
      document.images[cellLeft].src = document.images[num].src;
      document.images[num].src = blindCell;
      return;
    }
  }
}