makeGrid100();
makeActive();

const chooseColorWay = document.querySelectorAll("div#controlButtons button");
chooseColorWay.forEach((button) => {
    button.addEventListener("click", () => {
        switch(button.id){
            case "black":

                makeActive();
                console.log("black")
                break;
            
            case "gradual":

                makeGradual();
                console.log("gradual")
                break;

            case "rainbow":

                makeRainbow();
                console.log("rainbow")
                break;
        }
    })
}) 

    const chooseGridSize = document.querySelectorAll("div#sizeButtons button");
chooseGridSize.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.id === "grid100") {
            resetGrid();
            makeGrid100();
        } else if (button.id === "grid400"){
            resetGrid();
            makeGrid400();
        } else if (button.id === "grid900"){
            resetGrid();
            makeGrid900();
        }
    })
})

function makeRainbow(){

    const gridCellArray = document.querySelectorAll(".easBox");
    gridCellArray.forEach((div) => {
        div.addEventListener("mouseover", () => {

            const rgb1 = Math.floor(Math.random()*256);
            const rgb2 = Math.floor(Math.random()*256);
            const rgb3 = Math.floor(Math.random()*256);
            const rgbArray = [rgb1, rgb2, rgb3];

            const colorValue = getComputedStyle(div).getPropertyValue("background-color");
            const arrayValues = colorValue.match(/[\d.]+/g);

            for(let i = 0; i < arrayValues.length; i++){
                arrayValues[i] = rgbArray[i];
            }
            div.style.backgroundColor = "rgb(" + arrayValues.join(",") + ")";
        });
    })
}

function makeGradual(){
    
        const gridCellArray = document.querySelectorAll(".easBox");
        gridCellArray.forEach((div) => {

            const colorValue = getComputedStyle(div).getPropertyValue("background-color");
            const arrayValues = colorValue.match(/[\d.]+/g);
            
            div.addEventListener("mouseover", () => { 

                for (let i = 0; i < arrayValues.length; i++){
                    arrayValues[i] = arrayValues[i] - 51;
                }
                div.style.backgroundColor = "rgb(" + arrayValues.join(",") + ")";
            }) 
        });   
}

function makeActive(){

    const gridCellArray = document.querySelectorAll(".easBox");
    const rgbBlack = [0, 0, 0];
    gridCellArray.forEach((div) => {
        div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "rgb(" + rgbBlack.join(",") + ")"
        });
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
