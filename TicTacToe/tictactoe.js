/* TicTacToe */

// Encapsulation to preserve scope
$(function(){
var rowArray = [];
var currentPlayer = "X";

// var obj = {
	
// }
function changePlayer(){
    if( currentPlayer  == "X" ) {
        currentPlayer = "O";
        console.log(checkRows());
        reDisplay();
    }
    else {
        currentPlayer = "X";

    }
}


$("td").click(function(){
        $(this).html( currentPlayer );
        
        $(this).unbind("click");
        changePlayer();
        //console.dir(giveRowArray());
        });

function giveRowArray() {
	var cells = document.getElementsByClassName("cell");
	//var matrix = [];
	console.dir(cells);
	for(var i=0; i < cells.length; i++) {
		rowArray[i] = cells[i].innerHTML;
	}
}

function reDisplay() {
	var cells = document.getElementsByClassName("cell");
	for(var i=0; i < cells.length; i++) {
		console.log(rowArray[i]);
		if(rowArray[i] !== undefined) {
			cells[i].innerHTML = rowArray[i];
		}
	}
}

function checkRows() {
	if(hasWon()) {
		return false;		
	}
	for(var i = 0; i < 3; i++) {
		console.log(i);
		if(rowArray[i] == rowArray[i+1] && rowArray[i] != undefined) {
			rowArray[i+2] = currentPlayer;
			changePlayer();
			return true;
		}
	}

	rowArray[8] = currentPlayer;
}
function hasWon() {
	// rows
	for(var i = 0; i < 3; i++) {
		if(rowArray[i] == rowArray[i+1]) {
			if(rowArray[i] == rowArray[i+2]) {
				return rowArray[i];
			}
		}
	}

	// columns
	for(var i = 0; i < 3; i++) {
		if(rowArray[i] == rowArray[i+3]) {
			if(rowArray[i] == rowArray[i+6]) {
				return rowArray[i];
			}
		}
	}

	// diagonals
		if(rowArray[4] == rowArray[0]) {
			if(rowArray[4] == rowArray[8]) {
				return rowArray[4];
			}
		}

		if(rowArray[4] == rowArray[3]) {
			if(rowArray[4] == rowArray[6]) {
				return rowArray[4];
			}
		}
	return false;
}
//console.dir(giveRowArray());

})();
