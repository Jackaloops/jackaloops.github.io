var numbers = [];	//array where numbers are stored
var amount = 100;	//# of values in the array
var range = 100;	//max range of numbers

//sorts the array using Insertion Sort
//runs generateDiv to display it at the bottom of the page
function sortNumbers() {
  
  	//Runs through the entire array
  	for(var i = 1; i < numbers.length; i++){
        var key = numbers[i];				//value to be inserted into the sorted sub-array
      	var j = i - 1;						//stores index find key's index in sub-array
      	
      	//goes top-down in sub-array to find correct index for key
      	//stops when it finds the correct index:
      	//when value @ index j is smaller than key or reaches end of array
      	while(j >= 0 && numbers[j] > key){	
          numbers[j + 1] = numbers[j];		//shifts value @ index j to the right one spot
          j--;								//goes to next value
        }
      	numbers[j + 1] = key;				//places key at the "empty" spot (original value shifted to the right)
    }
  	
    generateDivs(dispArray);				//displays sort result
}

//generates <divs> representing the numbers array values into display
//@param display - HTML element used as a parent
function generateDivs(display) {
    display.innerHTML = "";										//resets display to be empty if already filled
  
  	//runs through entire array
    for (var i = 0; i < numbers.length; i++) {
      	var current = numbers[i];								//current value
        var div = document.createElement("DIV");				//created div element
      	
      	//sets colors and class
        var hue = 255 * (current / range);						//hue determined by how large value is
        div.style.background = "hsl(" + hue + ", 85%, 50%)";
        div.innerHTML = current;
        div.className = "number";
      	
        display.appendChild(div);								//div added to the end of display
    }
}

//Make random numbers and push them to numbers array.
//@param amount - how many numbers to generate
function generateNumbers(amount){
  	//reset numbers array to nothing
  	numbers = [];
  	
  	//create a for loop that runs amount numbers of times
  	//inside for loop, use .push() to add a random number to the numbers array
  	//the numbers should be integers between 0-100
 	for(var i = 0; i < amount; i++){
  		numbers.push(Math.round(Math.random() * range));
	} 
  	
  	//displays numbers on page
  	generateDivs(dispArray);
}

//creates a new array set to sort
function resetArray(){
  dispArray.innerHTML = "";
  generateNumbers(amount);
  generateDivs(disArray);
}

generateNumbers(amount);	//runs generateNumbers on load