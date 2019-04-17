var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
// var easy = document.querySelector("#easy");
// var hard = document.querySelector("#hard");
var modeButtons = document.querySelectorAll(".mode");

var colors = [];
var isHard = true;
var pickedColor;
colorDisplay.textContent = pickedColor;

init();

function init() {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			
			this.textContent === "EASY" ? isHard = false: isHard = true;
			// if(this.textContent === "EASY") {
			// 	isHard = false;
			// } else {
			// 	isHard = true;
			// }
			resetFunc();
		});
	}
	for (var i = 0; i < squares.length; i++) {
		// add initial colors
		squares[i].style.backgroundColor = colors[i];

		// add listeners
		squares[i].addEventListener("click", function(){
			if (this.style.backgroundColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				changeColors(pickedColor);
				h1.style.backgroundColor = pickedColor;
				reset.textContent = "Play Again?";
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again!";
			}
		});	
	}
	resetFunc();
}

for (var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		
		this.textContent === "EASY" ? isHard = false: isHard = true;
		// if(this.textContent === "EASY") {
		// 	isHard = false;
		// } else {
		// 	isHard = true;
		// }
		resetFunc();

	});
}

function resetFunc() {
	if(isHard) {
		colors = generateRandomColors(6);
	} else {
		colors = generateRandomColors(3);
	}
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	h1.style.backgroundColor = "steelblue";
	reset.textContent = "New Colors";
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
		
	}
}



// for (var i = 0; i < squares.length; i++) {
// 	// add initial colors
// 	squares[i].style.backgroundColor = colors[i];

// 	// add listeners
// 	squares[i].addEventListener("click", function(){
// 		if (this.style.backgroundColor === pickedColor) {
// 			messageDisplay.textContent = "Correct!";
// 			changeColors(pickedColor);
// 			h1.style.backgroundColor = pickedColor;
// 			reset.textContent = "Play Again?";
// 		} else {
// 			this.style.backgroundColor = "#232323";
// 			messageDisplay.textContent = "Try Again!";
// 		}
// 	});	
// }

// easy.addEventListener("click", function(){
// 	isHard = false;
// 	easy.classList.add("selected");
// 	hard.classList.remove("selected");
// 	colors = generateRandomColors(3);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	messageDisplay.textContent = "";
// 	h1.style.backgroundColor = "steelblue";
// 	reset.textContent = "New Colors";
// 	for (var i = 0; i < squares.length; i++) {
// 		if(colors[i]){
// 			// add initial colors
// 			squares[i].style.backgroundColor = colors[i];	
// 		} else {
// 			squares[i].style.display = "none"; //not display ("block")
// 		}
		
// 	}
// });

// hard.addEventListener("click", function(){
// 	isHard = true;
// 	hard.classList.add("selected");
// 	easy.classList.remove("selected");
// 	colors = generateRandomColors(6);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	messageDisplay.textContent = "";
// 	h1.style.backgroundColor = "steelblue";
// 	reset.textContent = "New Colors";
// 	for (var i = 0; i < squares.length; i++) {
// 		// add initial colors
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = "block";
// 	}
// });

// reset.addEventListener("click", function(){
// 	if(isHard) {
// 		colors = generateRandomColors(6);
// 	} else {
// 		colors = generateRandomColors(3);
// 	}
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	messageDisplay.textContent = "";
// 	h1.style.backgroundColor = "steelblue";
// 	this.textContent = "New Colors";
// 	for (var i = 0; i < squares.length; i++) {
// 		// add initial colors
// 		squares[i].style.backgroundColor = colors[i];
// 	}
// });

reset.addEventListener("click",function(){
	resetFunc();
});

function changeColors(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256); 
	var str = "rgb(" + red + ", " + green + ", " + blue + ")";
	return str;
}