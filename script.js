const CONTAINER_WIDTH = 480;
let container = document.querySelector(".container");
let gridDim = 16;

function createGrid() {
    for (let i = 0; i < gridDim; i++) {
        let colDiv = document.createElement("div");
        colDiv.setAttribute("class", "col");

        for (let j = 0; j < gridDim; j++) {
            let cellDiv = document.createElement("div");
            cellDiv.setAttribute("class", "cell");
            let padding = (CONTAINER_WIDTH / gridDim) / 2;
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

createGrid();