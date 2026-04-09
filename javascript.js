const gridContainer = document.querySelector(".grid-container");

const PX_SIZE = 550;

let gridDimension = 0;
let boxDimension = 0;



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
  box.addEventListener("mouseenter", (e) =>{
    box.style.backgroundColor = "Black";
  })
}

const clearBtn = document.querySelector(".clear-btn");
clearBtn.addEventListener("click", (e) => {
  clearGrid();
})

function clearGrid(){
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
}

const tenBtn = document.querySelector(".ten-btn");
tenBtn.addEventListener("click", (e) => {
  gridDimension = 10; 
  clearGrid();
  setGridSize();
})

const twentyFiveBtn = document.querySelector(".twenty-five-btn");
twentyFiveBtn.addEventListener("click", (e) =>{
  gridDimension = 25;
  clearGrid();
  setGridSize();
})
const fiftyBtn = document.querySelector(".fifty-btn");
fiftyBtn.addEventListener("click", (e) => {
  gridDimension = 50;
  clearGrid();
  setGridSize();
})
const hundredBtn = document.querySelector(".hundred-btn");
hundredBtn.addEventListener("click", (e) => {
  gridDimension = 100;
  clearGrid();
  setGridSize();
})

function setGridSize(){
  createGrid(gridDimension);
}

