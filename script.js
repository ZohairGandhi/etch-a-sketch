const CONTAINER_WIDTH = 480;
const container = document.querySelector(".container");

const resizeBtn = document.querySelector("#resizeBtn");
resizeBtn.addEventListener("click", resizeGrid);

function createGrid(gridDim) {
    let padding = (CONTAINER_WIDTH / gridDim) / 2;

    for (let i = 0; i < gridDim; i++) {
        const colDiv = document.createElement("div");
        colDiv.setAttribute("class", "col");

        for (let j = 0; j < gridDim; j++) {
            const cellDiv = document.createElement("div");
            cellDiv.setAttribute("class", "cell");
            cellDiv.style.padding = `${padding}px`;
            colDiv.appendChild(cellDiv);

            cellDiv.addEventListener("mouseenter", (e) => handleMouseEnter(e));
        }

        container.appendChild(colDiv);
    }
}

function handleMouseEnter(event) {
    event.target.style.backgroundColor = "black";
}

function resizeGrid() {
    let newGridDim = parseInt(prompt("Enter new side length for the grid (between 1-100)"));
    if (newGridDim < 1 || newGridDim > 100) {
        alert("Invalid value! Please enter a value between 1-100.");
        return;
    }
    container.textContent = "";
    createGrid(newGridDim);
}

createGrid(16);