const customColor = document.getElementById("colorPicker");
const width = document.getElementById("inputWidth");
const height = document.getElementById("inputHeight");
const submit = document.getElementById("submit");
let canvas = document.getElementById("pixelCanvas");
let sizePicker = document.getElementById("sizePicker");
//listen for the user to click the submit button and call the function to make the grid
sizePicker.addEventListener("submit", function(event) {
	event.preventDefault();
	makeGrid();
});

function makeGrid() {
//clear the canvas
	canvas.innerHTML = "";
//set height and width of canvas grid
	for (let h = 0; h < height.value; h++) {
		const userRow = canvas.insertRow(h);

		for (let w = 0; w < width.value; w++) {
			const cell = userRow.insertCell(w);
//listen for the user to click individual cells and aply chosen color
			cell.addEventListener('click', function() {
				if (cell.style.backgroundColor) {
					cell.style.backgroundColor = "";
				} else {}
				cell.style.backgroundColor = customColor.value;
			});
		}
	}
}