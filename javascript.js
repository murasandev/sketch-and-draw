const gridContainer = document.querySelector(".grid-container");

// create a function that creates a box
// height/width of box = width of container / x number of boxes
// create a function that sets box color on hover

// create a function that creates a row of boxes
// create a function that creates multiple rows

function createBox(row){
  
}

createGrid();
function createGrid(){
  for (let index = 0; index < 10; index++) {
    createRow();
  }
}



function createRow(){
  const rowContainer = document.createElement("div");
  rowContainer.classList.add("row-container");

  for (let index = 0; index < 10; index++) {
    const coloredSquare = document.createElement("div");
    coloredSquare.classList.add("colored-square");
    rowContainer.appendChild(coloredSquare);
  }

  gridContainer.appendChild(rowContainer);
}
