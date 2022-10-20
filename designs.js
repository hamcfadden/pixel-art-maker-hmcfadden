const customColor = document.getElementById("colorPicker");
const width = document.getElementById("inputWidth");
const height = document.getElementById("inputHeight");
const submit = document.getElementById("submit");
let canvas = document.getElementById("pixelCanvas");
let sizePicker = document.getElementById("sizePicker");

sizePicker.addEventListener("submit", function(event) {
    event.preventDefault();
    makeGrid();
});

function makeGrid() {

    canvas.innerHTML = "";

    for (let h = 0; h < height.value; h++) {
        const userRow = canvas.insertRow(h); 
    
        for (let w = 0; w < width.value; w++) {
            const cell = userRow.insertCell(w);
                  
    cell.addEventListener('click', function() {
        if(cell.style.backgroundColor) {
            cell.style.backgroundColor = "";
        }else{}
            cell.style.backgroundColor = customColor.value;
    });
}
    }
}
