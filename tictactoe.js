
"use strict";

var board;
function create_Board() {

	// By initializing the places with different numbers
	// we can avoid to check if the place is null or undefined, 
	// there will never be a match until 'X' or 'O' has 
	// filled a row, column or a diagonal line. 

	board = [1,2,3,
			 4,5,6,
			 7,8,9];

	/*
	Other possible data structural solutions for the board with arrays could be
	
	board1 = [1,2,3];
	board2 = [4,5,6];
	board3 = [7,8,9];

	Or a two dimensional board:
			
	board = [[1,2,3], [4,5,6], [7,8,9]];
	*/
}

var is_Winner = false; 

function update_Board(){
	console.log("checking for results");
	//Checking for column wins
	for(var i = 0; i< 9; i+=3){
		if(board[i] == board[i+1] && board[i+1] == board[i+2]){
			console.log("Winner");
			is_Winner = true;
		}
	}

	//Checking for row wins
	for(var i = 0; i<3; i++){
		if(board[i] == board[i+3] && board[i+3] == board[i+6]){
			console.log("Winner");
			is_Winner = true;
		}
	}

	//Checking diagonal lines for wins
	if(board[0] == board[4] && board[4] == board[8]){
		console.log("Winner");
		is_Winner = true;
	}
	if(board[6] == board[4] && board[4] == board[2]){
		console.log("Winner");
		is_Winner = true;
	}
	if(is_Winner){
		document.getElementById("p1").innerHTML = "We have a winner, congratulations";
	}

	/*
	// Checking rows for wins
	if(board[0] == board[1] && board[1] == board[2]){
		console.log("Winner");
	}
	if(board[3] == board[4] && board[4] == board[5]){
		console.log("Winner");
	}
	if(board[6] == board[7] && board[7] == board[8]){
		console.log("Winner");
	}

	//Checking columns for wins
	if(board[0] == board[3] && board[3] == board[6]){
		console.log("Winner");
	}
	if(board[1] == board[4] && board[4] == board[7]){
		console.log("Winner");
	}
	if(board[2] == board[5] && board[5] == board[8]){
		console.log("Winner");
	}
	*/
}

var counter = 0;
var buttons = document.getElementsByTagName("button");
var buttonsCount = buttons.length;

for(var i = 0; i< buttons.length; i++){
	// Giving each button an id, might be better to do that
	// inside the html as js file could take longer to load. 
    buttons[i].id=i;
    console.log(buttons[i].id);

    // Thanks to stackoverflow for: buttons[i].onclick = function(e)
    // Assign the onclick function to all the buttons.
	buttons[i].onclick = function(e){
		if(counter%2 == 0 && this.innerHTML != "X" && this.innerHTML != "O"){
			this.innerHTML = "X";
			board[this.id] = "X";
		}
		else if (this.innerHTML != "X" && this.innerHTML != "O"){
			this.innerHTML = "O";
			board[this.id] = "O";
		}
		else{
			// If player tries to make an illegal move then do nothing
			// and allow the same player to press a valid place on the board.
			counter--;
		}
		counter++;
		update_Board();
	}
}

create_Board();