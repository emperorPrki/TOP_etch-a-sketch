makeGrid100();
makeActive();

const chooseGridSize = document.querySelectorAll("div#sizeButtons button")
chooseGridSize.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.id === "grid100") {
            resetGrid();
            makeGrid100();
            makeActive();
        } else if (button.id === "grid400"){
            resetGrid();
            makeGrid400();
            makeActive();
        } else if (button.id === "grid900"){
            resetGrid();
            makeGrid900();
            makeActive();
        }
    })
})

function makeGradual(){
    const gridCellArray = document.querySelectorAll(".easBox");
    gridCellArray.forEach((div) => {
        div.addEventListener("mouseover", () => {
            const colorValue = getComputedStyle(div).getPropertyValue("background-color");
            const arrayValues = colorValue.match(/[\d]+/g)

            for (let i = 0; i < arrayValues.length; i++){
                arrayValues[i] = arrayValues[i] - 51;
            }
            div.style.backgroundColor = "rgb(" + arrayValues.join(",") + ")";
        })
    })
}

function makeActive(){
    const gridCellArray = document.querySelectorAll(".easBox");
    gridCellArray.forEach((div) => {
        div.addEventListener("mouseover", () => {
        div.classList.add("active");
        })
    })
}

function makeGrid100(){
    const selectEasContainer = document.querySelector("#eas-container");
    selectEasContainer.setAttribute("style", "grid-template-columns: repeat(10, auto)");

    for(let i = 0; i < 100; i++){
        const createGridCell = document.createElement("div");
        createGridCell.setAttribute("class", "easBox");
        selectEasContainer.appendChild(createGridCell);
    }
}

function makeGrid400(){
    const selectEasContainer = document.querySelector("#eas-container");
    selectEasContainer.setAttribute("style", "grid-template-columns: repeat(20, auto)");

    for(let i = 0; i < 400; i++){
        const createGridCell = document.createElement("div");
        createGridCell.setAttribute("class", "easBox");
        selectEasContainer.appendChild(createGridCell);
    }
}

function makeGrid900(){
    const selectEasContainer = document.querySelector("#eas-container");
    selectEasContainer.setAttribute("style", "grid-template-columns: repeat(30, auto)");

    for(let i = 0; i < 900; i++){
        const createGridCell = document.createElement("div");
        createGridCell.setAttribute("class", "easBox");
        selectEasContainer.appendChild(createGridCell);
    }
}

function resetGrid(){
    const selectEasContainer = document.querySelector("#eas-container");

    while(selectEasContainer.hasChildNodes()){
        selectEasContainer.removeChild(selectEasContainer.firstChild);
    }
}