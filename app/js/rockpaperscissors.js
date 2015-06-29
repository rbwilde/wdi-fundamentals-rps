GA-Homework
////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`

        if (move === null)
        {
            return getInput();
        } else { 
        
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move;
}}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`

        if (move === null)
        {
            return randomPlay();
        } else {
            return move;
        }
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
  
}

function getWinner(playerMove,computerMove) {
    var winner;
    //var s = "scissors";
    //var p = "paper";
    //var r = "rock";
   if ((playerMove === "scissors") && (computerMove === "paper"))
   {
       winner = "Player";
   } else if ((playerMove === "scissors") && (computerMove === "rock"))
   { 
       winner = "Computer";
   } 
   else if ((playerMove === "rock") && (computerMove === "paper"))
   {
       winner = "Computer";
   }  else if ((playerMove === "rock") && (computerMove === "scissors"))
   {
       winner = "Player";
    }  else if ((playerMove === "paper") && (computerMove === "rock"))
   { 
       winner = "Player";
   } else if ((playerMove === "paper") && (computerMove === "scissors"))
   {
       winner = "Computer";
       
   } else if (playerMove === computerMove)
   {
       winner = "Tie";
   }
       
       
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    return winner;
}

function playToFive(i) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    for (i=0; i<=5;i++)
    {
    if (winner === "Player")
        { 
            playerWins += 1;
            
        }
        else if (winner === "Computer")
        { 
            computerWins += 1;
            
        }
        
    console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
    console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    
    
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}
}
