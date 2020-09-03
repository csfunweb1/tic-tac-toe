var player1Turn = true; //tracks players' turns
var boardarray = ["", "", "", "", "", "", "", "", ""]; //gameboard to check winning conditions
var roundcount = 0; //to decide ties
var boardUnlocked = false; //to ensure player clicks 'start game' button before playing and to lock board after winner is decided
var xOrO = "X"; //decides which character to place on the board
var resetButtonHTML =  '<input type = "button" onclick = "resetgame()" value = "RESET GAME" id = "allbuttons"/>';
var startButtonHTML = '<input type = "button" onclick = "startgame()" value = "START GAME" id = "allbuttons"/>';
var clickstartButtonMessage = "click the 'start game' button";
var gameOverResetMessage = "Game is over. Click the 'reset game' button";
var emptySquareMessage = "Please click on an empty square";

/*function controls 'start game' button
unlocks board
prints player 1's turn
changes 'start button' to 'reset button'*/
function startgame() {
  boardUnlocked = true;
  document.getElementById("playerturn").innerHTML = xOrO + "'s turn";
  document.getElementById("reset").innerHTML = resetButtonHTML;
}

/* function resets game
resets tic tac toe boxes to empty
resets 'reset button' to 'start button'
reset player's turn
resets roundcount
clears winner span
locks board
*/
function resetgame() {
  for (var i = 0; i <= 8; i++) {
    document.getElementById("square" + i).innerHTML = "";
  }
  document.getElementById("reset").innerHTML = startButtonHTML;
  player1Turn = true;
  document.getElementById("playerturn").innerHTML = "";
  boardarray = ["", "", "", "", "", "", "", "", ""];
  roundcount = 0;
  document.getElementById("winner").innerHTML = "";
  boardUnlocked = false;
  xOrO = "X";
}

/*function checks if the board is locked
if board is full, alerts game over
if board is not full, alerts click the start game button
checks if player clicks on already filled out square
returns false if board is unlocked
returns true if board is locked*/

function gate(position) {
  if (!boardUnlocked) {
    if (roundcount == 0) {
      alert(clickstartButtonMessage);
    } 
    else {
      alert(gameOverResetMessage);
    }
    return true;
  }
  if (document.getElementById("square" + position).textContent != "") {
    alert(emptySquareMessage);
    return true;
  }
  return false;
}

function whenclicked(position) {
  if (gate(position)) {
    return;
  }
  placeXO(position);
}

/*function switches between X's and O's turns
prints out tie / winner
checks if player clicks on the same square*/
function placeXO(position) {
  if (boardUnlocked) {
    document.getElementById("square" + position).innerHTML = xOrO;
    boardarray[position] = xOrO;
    roundcount++;
    player1Turn = !player1Turn;
    if (checkwin(boardarray) == true) {
      boardUnlocked = false;
      displayResult();
      return;
    }
    changeTurn();
  }
}

function changeTurn() {
  if (!player1Turn) {
    xOrO = "O";
  } else {
    xOrO = "X";
  }
  document.getElementById("playerturn").innerHTML = xOrO + "'s turn";
}

function displayResult() {
  if (roundcount == 9) {
    document.getElementById("winner").innerHTML = "Tie, no one wins";
    document.getElementById("playerturn").innerHTML = "";
  } else {
    document.getElementById("winner").innerHTML = xOrO + " wins";
    document.getElementById("playerturn").innerHTML = "";
  }
}

/*function checks if players have winning combination
checks all possible winning strategies
returns tie if board is completely full
*/
function checkwin(boardarray) {
  if (
    boardarray[0] == boardarray[1] &&
    boardarray[1] == boardarray[2] &&
    boardarray[0] != ""
  ) {
    return true;
  } else if (
    boardarray[3] == boardarray[4] &&
    boardarray[4] == boardarray[5] &&
    boardarray[3] != ""
  ) {
    return true;
  } else if (
    boardarray[6] == boardarray[7] &&
    boardarray[7] == boardarray[8] &&
    boardarray[6] != ""
  ) {
    return true;
  } else if (
    boardarray[0] == boardarray[3] &&
    boardarray[3] == boardarray[6] &&
    boardarray[0] != ""
  ) {
    return true;
  } else if (
    boardarray[1] == boardarray[4] &&
    boardarray[4] == boardarray[7] &&
    boardarray[1] != ""
  ) {
    return true;
  } else if (
    boardarray[2] == boardarray[5] &&
    boardarray[5] == boardarray[8] &&
    boardarray[2] != ""
  ) {
    return true;
  } else if (
    boardarray[0] == boardarray[4] &&
    boardarray[4] == boardarray[8] &&
    boardarray[0] != ""
  ) {
    return true;
  } else if (
    boardarray[2] == boardarray[4] &&
    boardarray[4] == boardarray[6] &&
    boardarray[2] != ""
  ) {
    return true;
  } else if (roundcount == 9) {
    return true;
  } else {
    return false;
  }
}
