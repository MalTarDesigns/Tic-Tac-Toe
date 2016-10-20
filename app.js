function startGame() {
  document.turn = "X";
  setMessage(document.turn + " start the game!");
}

function setMessage(msg) {
  document.getElementById("message").innerHTML = msg;
}

function nextMove(box) {
  //This if statement prevents the user from overriding the other user's turn
  if(box.innerHTML ==="") {
    box.innerHTML = document.turn;
    switchTurn();
  }else {
    setMessage("You can't go there!");
  } 
}


  
 function switchTurn() {
   if(checkWinner(document.turn)) {
   setMessage(document.turn + " is the winner!!"); 
   
   } else 
   if (document.turn === "X") {
              document.turn = "O";    
              setMessage(document.turn + "'s turn");
      }else {
            document.turn = "X";
            setMessage(document.turn + "'s turn");   
    }   
 }

function checkWinner(move) {
  var result = false;
  if(checkRow(1,2,3,move) ||
     checkRow(4,5,6,move) ||
     checkRow(7,8,9,move) ||
     checkRow(1,4,7,move) ||
     checkRow(2,5,8,move) ||
     checkRow(3,6,9,move) ||
     checkRow(1,5,9,move) ||
     checkRow(3,5,7,move) ) {
      
      result = true;
     }
  return result;
}

function checkRow(a,b,c,move) {
  //sets temporary variable to false only in this function 
  var result = false;
  if(getBox(a) === move && getBox(b) === move && getBox(c) === move) {
    result = true;
  }
  return result;
}

function getBox(number) {
  //use return to store the result of the id
  var boxNum = document.getElementById("b" + number).innerHTML; 
  return boxNum
}

console.log(boxNum);