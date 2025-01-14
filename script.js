let gridContainer = document.querySelector(".gridContainer");
let colorWheel = document.querySelector("#colorWheel");
let gridSizeInput = document.querySelector("#gridSizeInput")
let generateButton = document.querySelector("#generateButton");
let valueInput = document.querySelector(".valueInput");
let eraserButton = document.querySelector("#eraserButton");
var eraserMode = false;

function generateGrid(gridSize) {
    gridContainer.innerHTML = "";
    valueInput.textContent = `${gridSizeInput.value} x ${gridSizeInput.value}`
    const gridContainerSize = 512;
    const squareSize = gridContainerSize / gridSize; 

    for (let i = 0; i < gridSize * gridSize ; i++) {
        let square = document.createElement("div");
        square.style.backgroundColor = "white";
        square.style.flex = `1 1 calc(100% / ${gridSize})`;

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        gridContainer.insertAdjacentElement("beforeend", square);

        square.addEventListener('mousemove', () => {
            if(eraserMode)
            {
                square.style.backgroundColor =  "#FFFFFF";
            }
            else
            {
                square.style.backgroundColor = `${colorWheel.value}`
            }
            
        })
    }
}

generateGrid(16)

generateButton.addEventListener("click", () => {
    let gridSize = parseInt(gridSizeInput.value);

    if(!isNaN(gridSize) && gridSize > 0) {
        generateGrid(gridSize);
    }
    else {
        gridSize(16);
    }
})

eraserButton.addEventListener("click", () => {
    eraserMode = !eraserMode;
    console.log("eraser selected");
})