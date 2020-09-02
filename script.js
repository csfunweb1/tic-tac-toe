var player1Turn = true;
var gamestart = false;
var boardarray = ["", "", "","", "", "", "", "", ""];
var roundcount = 0;
var lockboard = false;

function startgame(){
  gamestart = true;
  document.getElementById('allbuttons').value = "RESET GAME";
  document.getElementById('playerturn').innerHTML = "Player 1's turn"
  document.getElementById('reset').innerHTML = '<input type = "button" onclick = "resetgame()" value = "RESET GAME" id = "allbuttons"/>';
  
}

function resetgame(){
  for (var i = 0; i<=8; i++){
    document.getElementById("square"+i).innerHTML = "";
  } 
  document.getElementById('reset').innerHTML = '<input type = "button" onclick = "startgame()" value = "START GAME" id = "allbuttons"/>';
  player1Turn = true;
  document.getElementById('playerturn').innerHTML = ""
  gamestart = false;
  boardarray = ["", "", "","", "", "", "", "", ""];
  roundcount = 0;
  document.getElementById("winner").innerHTML = "";  
  lockboard = false;
}

function whenclicked(position){
  if (!gamestart){
    alert("Click the 'start game' button")
  }
  else{
    if (player1Turn) {
      if ((document.getElementById("square"+position).textContent == "" )&& lockboard == false){
        document.getElementById("square"+position).innerHTML = "X";  
        boardarray[position] = "X";
        roundcount++
        document.getElementById('playerturn').innerHTML = "Player 2's turn"
        player1Turn = false;  
        if (checkwin(boardarray) == true){
          lockboard = true;
          if (roundcount >= 8){
            document.getElementById("winner").innerHTML = "Tie, no one wins";  
            document.getElementById('playerturn').innerHTML = ""
          }
          else{
            document.getElementById("winner").innerHTML = "Player 1 Wins";  
            document.getElementById('playerturn').innerHTML = "";
          }
        }
        
        
      }
      else{
        if (lockboard == false){
          alert("Please click on an empty square")
        }
        else{
          alert("Game over, please click on reset")
        }
      }
      
    }
    else{
      if ((document.getElementById("square"+position).textContent == "" )&& lockboard == false){
        document.getElementById("square"+position).innerHTML = "O";
        boardarray[position] = "O";
        roundcount++
        document.getElementById('playerturn').innerHTML = "Player 1's turn"
        player1Turn = true;  
        if (checkwin(boardarray) == true){
          lockboard = true;
          if (roundcount >= 8){
            document.getElementById("winner").innerHTML = "Tie, no one wins";
            document.getElementById('playerturn').innerHTML = ""
          }
          else{
            document.getElementById("winner").innerHTML = "Player 2 Wins";
            document.getElementById('playerturn').innerHTML = ""
          }
        }
        
        }  
        
      else{
        if (lockboard == false){
          alert("Please click on an empty square")
        }
        else{
          alert("Game over, please click on reset")
        }
      }
    }
   
    } 
}
function checkwin(boardarray){
  if ((boardarray[0] == boardarray[1] && boardarray[1] == boardarray[2]) && boardarray[0]!=""){
    return true;
  }
  else if ((boardarray[3] == boardarray[4] && boardarray[4] == boardarray[5])&& boardarray[3]!=""){
    return true;
  }
  else if ((boardarray[6] == boardarray[7] && boardarray[7] == boardarray[8])&& boardarray[6]!=""){
    return true;
  }
  else if ((boardarray[0] == boardarray[3] && boardarray[3] == boardarray[6])&& boardarray[0]!=""){
    return true;
  }
  else if ((boardarray[1] == boardarray[4] && boardarray[4] == boardarray[7])&& boardarray[1]!=""){
    return true;
  }
  else if ((boardarray[2] == boardarray[5] && boardarray[5] == boardarray[8])&& boardarray[2]!=""){
    return true;
  }
  else if ((boardarray[0] == boardarray[4] && boardarray[4] == boardarray[8])&& boardarray[0]!=""){
    return true;
  }
  else if ((boardarray[2] == boardarray[4] && boardarray[4] == boardarray[6])&& boardarray[2]!=""){
    return true;
  }
  else if (roundcount == 8){
    return true
  }
  else{
    return false;
  }
}
// boardarray = ["O", "", "", "O", "", "", "O", "", ""]
// checkwin(boardarray)
