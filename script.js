let container = document.querySelector(".container");
let gridDim = 16;

function createGrid() {
    for (let i = 0; i < gridDim; i++) {
        let colDiv = document.createElement("div");
        colDiv.setAttribute("class", "col");

        for (let j = 0; j < gridDim; j++) {
            let cellDiv = document.createElement("div");
            cellDiv.setAttribute("class", "cell");
            colDiv.appendChild(cellDiv);
        }

        container.appendChild(colDiv);
    }
}

createGrid();