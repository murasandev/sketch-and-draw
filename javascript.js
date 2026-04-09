const gridContainer = document.querySelector(".grid-container");

const PX_SIZE = 550;

let gridDimension = prompt("How many squares per side?");
let boxDimension = 0;

createGrid(gridDimension);

function createGrid(squarePerRow){
  for (let index = 0; index < squarePerRow; index++) {
    createRow(squarePerRow);
  }
}

function createRow(rowSize){
  const rowContainer = document.createElement("div");
  rowContainer.classList.add("row-container");

  for (let index = 0; index < rowSize; index++) {
    createBox(rowContainer);
  }
  gridContainer.appendChild(rowContainer);
}

function createBox(parentContainer){
  const coloredSquare = document.createElement("div");
  coloredSquare.classList.add("colored-square");

  getBoxDimension();
  addEventListenerToBox(coloredSquare);
  coloredSquare.style.width = `${boxDimension}px`;
  coloredSquare.style.height = `${boxDimension}px`;

  parentContainer.appendChild(coloredSquare);
}

function getBoxDimension(){
  boxDimension = PX_SIZE / gridDimension;
}

function addEventListenerToBox(box){
  box.addEventListener("mousedown", (e) =>{
    box.style.backgroundColor = "Black";
  })
}
