var score = 0;
var level = 0;
var sounds = {
  "yellow": new Audio("http://cdn.mos.musicradar.com/audio/samples/filthy-hippy-demo-loops/K1%20Bass110A-07.mp3"),
  "blue": new Audio(""),
  "green": new Audio(""),
  "red": new Audio(""),
};


//				0		1		2		3
var colors = ["red", "green", "blue", "yellow"];
var pattern = [];		//this array saves the pattern "Simon" makes
var userPattern = [];	//this array stores the pattern the user makes
var count = 0;			//keeps count of how many colors are left to create in the pattern

//start the game!
function startGame() {
  count = 4 + level; //Generate 4 colors
  pattern = [];
  userPattern = [];
  makePattern();
}

//generates a pattern and saves it in the pattern array
function makePattern() {
  if(count > 0){
  	var rand = Math.floor(Math.random() * 4);
  	var color = colors[rand];
  	flashColor(color);
  	pattern.push(color);
  	
  	count--;
  	setTimeout(makePattern, 1000);
  }
}

//tells the user if they won or lost
function submitGame(){
  if(isEqual(pattern, userPattern)){
    alert("Cool.");
    level++;
    startGame();
  }
  else {
    alert("Boo.");
    level = 0;
  }
}

//runs when the user picks a color
function addColor(color) {
	flashColor(color);
  	userPattern.push(color);
}

//takes two arrays, if they are the same, returns true
//if they are not the same, returns false
function isEqual(first, second){
  	//check length
  	if(first.length != second.length){
      return false;
    }
  	//check elements against each other
  	for(var i = 0; i < first.length; i++){
      if(first[i] != second[i]){
        return false;
      }
    }
  	return true;
}

function flashColor(color) {
  var div = document.getElementById(color);
  div.style.opacity = "1";
  sounds[color].play();
  setTimeout(function() {
    div.style.opacity = ".25";
    sounds[color].pause();
    if(color == "blue"){
      sounds[color].currentTime = 0;
    }
  }, 500);
}