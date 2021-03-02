var numberOfSquares = 6;
var colors = [];
var pickedColor ;
var squares = document.querySelectorAll(".square"); 
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6;
		/*if(this.textContent === "Easy"){
			numberOfSquares = 3;
		}else{
			numberOfSquares = 6;
		}*/
		reset();
	});
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){

		squares[i].addEventListener("click", function(){
		//compare color to pickedColor
		if(this.style.backgroundColor === pickedColor){
			changeColor(pickedColor);
			messageDisplay.textContent = "Correct!";
			h1.style.backgroundColor = pickColor;
			resetButton.textContent = "Play Again?";
		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
	}
}

function reset(){
	//generate random colors
	colors = generateRandomColors(numberOfSquares);
	//reseting message display
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
	//pick a new random color
	pickedColor = pickColor();
	//change color display to match picked color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

/*easyMod.addEventListener("click", function(){
	easyMod.classList.add("selected");
	hardMod.classList.remove("selected");
	numberOfSquares = 3;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
});

hardMod.addEventListener("click", function(){
	hardMod.classList.add("selected");
	easyMod.classList.remove("selected");
	numberOfSquares = 6;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});*/

resetButton.addEventListener("click", function(){
	reset();
});


function changeColor(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var array = [];
	for(var i = 0; i < num; i++){
		array[i] = randomColor();
	}
	return array;
}

function randomColor(){
	return "rgb(" + Math.floor(Math.random() * 256) + 
	", " +  Math.floor(Math.random() * 256) + 
	", " + Math.floor(Math.random() * 256) + 
	")";
}