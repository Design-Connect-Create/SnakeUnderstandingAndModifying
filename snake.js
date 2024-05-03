//canvas variables
let canvas;
let context;

let lastDirection = "right";
let snakeDirection;

let backgroundColor = "white";

//TODO: create snake variables here that match the food variables (3)
//snake variables
let snakePosX = 150;
let snakePosY = 150;
let snakeColor = "green";
let snakeWidth = 10;
let snakeHeight = 10;

//food variables
let foodPosX = 50;
let foodPosY = 50;
let foodColor = "red";
let foodWidth = 10;
let foodHeight = 10;

//time variables
let interval = 50;
let step;

//key bindings
let upKey = 119; //W
let downKey = 115; //A
let leftKey = 97; //S
let rightKey = 100; //D



function initial() {
	//set up canvas
	canvas = document.getElementById('canvas');
	context = canvas.getContext('2d');

	//initialize food and snake objects
	newFood();

	//set interval
  	step = setInterval("draw()", interval);

	//initialize key press event listener
  	document.addEventListener("keypress", keyPress, false);
}

function draw() {
	//draw canvas
	//TODO: make a variable called backgroundColor that stores the color string (1)
	context.fillStyle = backgroundColor;
	context.fillRect(0, 0, canvas.width, canvas.height);

	//move snake
  	animateSnake();

  	//draw snake
  	//TODO: write the two lines of code that will draw the snake on the screen (4)
  	//HINT: use the food code as reference
  
	//draw food
	//TODO: make variables that store the food's color, height, and width (2)
  
	context.fillStyle = foodColor;
	context.fillRect(foodPosX, foodPosY, 10, 10);

	//draw score
	context.fillStyle = "black";
	context.fillText("Score: " + "0", canvas.width - 50, 20);
}


function animateSnake() {
	
}

function newFood() {
	
	foodPosX = 100; 
	foodPosY = 100;
}

function keyPress(evt) {
	
  if (evt.keyCode == upKey) {
      snakeDirection = "up";
  }
  else if (evt.keyCode == downKey) {
      snakeDirection = "down";
  }
  else if (evt.keyCode == leftKey) {
      snakeDirection = "left";
  }
  else if (evt.keyCode == rightKey) {
      snakeDirection = "right";
  }
}