//contains all the tiles as an array
var tiles = document.getElementsByClassName("tile");
//keeps track of whose turn it is. true = X's turn , false = O's turn
var XTurn = true;

//places an X or O on the board, 
//tileEl is the tile that is clicked
function placeMove(tileEl) {
    //first checks if there is already a piece on the selected tile
    if (tileEl.classList.contains("x") || tileEl.classList.contains("o")) {
        alert("There is already a piece here!");
        return;
    } else if (XTurn) {
        tileEl.classList += " x";
        tileEl.innerHTML = "X";
    } else {
        tileEl.classList += " o";
        tileEl.innerHTML = "O";
    }

    //flips XTurn to the opposite value.
    XTurn = !XTurn;
    //runs checkTiles to see if either player wins
    checkTiles();
}

//checks if either player wins
function checkTiles() {
	
  	//checks rows
    for (var i = 0; i < tiles.length; i += 3) {
        if (tiles[i].className != "tile" && tiles[i].className == tiles[i + 1].className && tiles[i + 1].className == tiles[i + 2].className) {
            if (tiles[i].classList.contains("x")) {
                alert("X Wins!");
            } else {
                alert("O Wins!");
            }
        }
    }
	
  	//checks columns
    for (var i = 0; i < 3; i++) {
        if (tiles[i].className != "tile" && tiles[i].className == tiles[i + 3].className && tiles[i + 3].className == tiles[i + 6].className) {
            if (tiles[i].classList.contains("x")) {
                alert("X Wins!");
            } else {
                alert("O Wins!");
            }
        }
    }

	//checks diagonally
    if (tiles[0].className != "tile" && tiles[0].className == tiles[4].className && tiles[4].className == tiles[8].className) {
        if (tiles[0].classList.contains("x")) {
            alert("X Wins!");
        } else {
            alert("O Wins!");
        }
    } else if (tiles[2].className != "tile" && tiles[2].className == tiles[4].className && tiles[4].className == tiles[6].className) {
        if (tiles[2].classList.contains("x")) {
            alert("X Wins!");
        } else {
            alert("O Wins!");
        }
    }
}

for (var i = 0; i < tiles.length; i++) {
    tiles[i].addEventListener("click", function() {
        placeMove(this);
    });
    tiles[i].innerHTML = i;
}