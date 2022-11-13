
// grabbing buttons from index.HTML and storing them in main.js
    let buttonOne = document.querySelector('#button1');
    let buttonTwo = document.querySelector('#button2');
    let buttonThree = document.querySelector('#button3');
    let buttonFour = document.querySelector('#button4');
    let buttonFive = document.querySelector('#button5');
    let buttonSix = document.querySelector('#button6');
    let buttonSeven = document.querySelector('#button7');
    let buttonEight = document.querySelector('#button8');
    let buttonNine = document.querySelector('#button9');
    let buttonReset = document.querySelector('#resetButtonId');
    let buttonComputerPlayer = document.querySelector('#computerPlayerId');



// adding a click event listener to all of my js stored buttons
    buttonOne.addEventListener('click', buttonOneClick);
    buttonTwo.addEventListener('click', buttonTwoClick);
    buttonThree.addEventListener('click', buttonThreeClick);
    buttonFour.addEventListener('click', buttonFourClick);
    buttonFive.addEventListener('click', buttonFiveClick);
    buttonSix.addEventListener('click', buttonSixClick);
    buttonSeven.addEventListener('click', buttonSevenClick);
    buttonEight.addEventListener('click', buttonEightClick);
    buttonNine.addEventListener('click', buttonNineClick);
    buttonReset.addEventListener('click', buttonResetClick);
    buttonComputerPlayer.addEventListener('click', buttonComputerPlayerClick)



// global variables
    let computerValueArray = [1,2,3,4,5,6,7,8,9];
    let player = "playerOne";
    let playerOneChoice = [];
    let playerTwoChoice = [];
    let computerPlayerStatus = 0;
    let computerValue = 0;
    let tieFlag = 0;
    let sec = 0;
    let scorePlayerOne = 0;
    let scorePlayerTwo = 0;

    let playerOneChoiceMinimax = [];
    let playerTwoChoiceMinimax = [];



// computer - on function
function buttonComputerPlayerClick(){
        document.querySelector('#computerPlayerId').style.background = 'rgba(99, 185, 203, 0.5)';
    return computerPlayerStatus = 1;
}



// timer
let timer = setInterval( () => {
    if (sec < 0){
        //console.log("stalling");
        return;
    } 
        document.querySelector('#timerId').innerHTML = '00:' + sec;   
        sec--;
}, 1000);



// timer reset function
function timerReset(){
    return sec = 10;
}



// timer reset on reset buttin function
function resetTimerReset(){
    return sec = 0;
}



// main function being called for button click 1
function buttonOneClick(){
    timerReset()
        // computer player addition ----------------------
    if (player === "playerOne" && computerPlayerStatus === 1){
        document.querySelector('#button1').innerHTML = " X ";
        playerOneChoice.push(1);



        playerOneChoiceMinimax.push(1);



        buttonOne.removeEventListener('click', buttonOneClick);
        document.querySelector('#playerUp').innerHTML = "Player X's turn.";
        checkWinnerOne()
        checkForTie()
        compPlayerDelayButtonOne()
        //console.log(computerValueArray);
        return player = "playerOne";
    }
        // -----------------------------------------------
    if (player === "playerOne" && computerPlayerStatus === 0){
        document.querySelector('#button1').innerHTML = " X ";
        playerOneChoice.push(1);
        buttonOne.removeEventListener('click', buttonOneClick);
        document.querySelector('#playerUp').innerHTML = "Player O's turn.";
        checkWinnerOne()
        checkWinnerTwo()
        checkForTie()
        return player = "playerTwo";
    } else if (player === "playerTwo") {
        document.querySelector('#button1').innerHTML = " O ";
        playerTwoChoice.push(1);
        buttonOne.removeEventListener('click', buttonOneClick);
        document.querySelector('#playerUp').innerHTML = "Player X's turn.";
        checkWinnerOne()
        checkWinnerTwo()
        checkForTie()
        return player = "playerOne";
    }
}



// main function being called for button click 2
function buttonTwoClick(){
    timerReset()
        // computer player addition ----------------------
    if (player === "playerOne" && computerPlayerStatus === 1){
        document.querySelector('#button2').innerHTML = " X ";
        playerOneChoice.push(2);


        
        playerOneChoiceMinimax.push(2);



        buttonTwo.removeEventListener('click', buttonTwoClick);
        document.querySelector('#playerUp').innerHTML = "Player X's turn.";
        checkWinnerOne()
        checkForTie()
        compPlayerDelayButtonTwo()
        // console.log(computerValueArray)  
        return player = "playerOne";
    }
        // -----------------------------------------------
    if (player === "playerOne" && computerPlayerStatus === 0) {
        document.querySelector('#button2').innerHTML = " X ";
        playerOneChoice.push(2);
        buttonTwo.removeEventListener('click', buttonTwoClick);
        document.querySelector('#playerUp').innerHTML = "Player O's turn.";
        checkWinnerOne()
        checkWinnerTwo()
        checkForTie()
        return player = "playerTwo";
    } else if (player === "playerTwo") {
        document.querySelector('#button2').innerHTML = " O ";
        playerTwoChoice.push(2);
        buttonTwo.removeEventListener('click', buttonTwoClick);
        document.querySelector('#playerUp').innerHTML = "Player X's turn.";
        checkWinnerOne()
        checkWinnerTwo()
        checkForTie()
        return player = "playerOne";
    }
}



// main function being called for button click 3
function buttonThreeClick(){
    timerReset()
        // computer player addition ----------------------
    if (player === "playerOne" && computerPlayerStatus === 1){
        document.querySelector('#button3').innerHTML = " X ";
        playerOneChoice.push(3);


        
        playerOneChoiceMinimax.push(3);



        buttonThree.removeEventListener('click', buttonThreeClick);
        document.querySelector('#playerUp').innerHTML = "Player X's turn.";
        checkWinnerOne()
        checkForTie()
        compPlayerDelayButtonThree()
        // console.log(computerValueArray);
        return player = "playerOne";
    }
        // -----------------------------------------------
    if (player === "playerOne" && computerPlayerStatus === 0) {
        document.querySelector('#button3').innerHTML = " X ";
        playerOneChoice.push(3);
        buttonThree.removeEventListener('click', buttonThreeClick);
        document.querySelector('#playerUp').innerHTML = "Player O's turn.";
        checkWinnerOne()
        checkWinnerTwo()
        checkForTie()
        return player = "playerTwo";
    } else if (player === "playerTwo") {
        document.querySelector('#button3').innerHTML = " O ";
        playerTwoChoice.push(3);
        buttonThree.removeEventListener('click', buttonThreeClick);
        document.querySelector('#playerUp').innerHTML = "Player X's turn.";
        checkWinnerOne()
        checkWinnerTwo()
        checkForTie()
        return player = "playerOne";
    }
}



// main function being called for button click 4
function buttonFourClick(){
    timerReset()
        // computer player addition ----------------------
    if (player === "playerOne" && computerPlayerStatus === 1){
        document.querySelector('#button4').innerHTML = " X ";
        playerOneChoice.push(4);


        
        playerOneChoiceMinimax.push(4);



        buttonFour.removeEventListener('click', buttonFourClick);
        document.querySelector('#playerUp').innerHTML = "Player X's turn.";
        checkWinnerOne()
        checkForTie()
        compPlayerDelayButtonFour()
        // console.log(computerValueArray);
        return player = "playerOne";
    }
        // -----------------------------------------------
    if (player === "playerOne" && computerPlayerStatus === 0) {
        document.querySelector('#button4').innerHTML = " X ";
        playerOneChoice.push(4);
        buttonFour.removeEventListener('click', buttonFourClick);
        document.querySelector('#playerUp').innerHTML = "Player O's turn.";
        checkWinnerOne()
        checkWinnerTwo()
        checkForTie()
        return player = "playerTwo";
    } else if (player === "playerTwo") {
        document.querySelector('#button4').innerHTML = " O ";
        playerTwoChoice.push(4);
        buttonFour.removeEventListener('click', buttonFourClick);
        document.querySelector('#playerUp').innerHTML = "Player X's turn.";
        checkWinnerOne()
        checkWinnerTwo()
        checkForTie()
        return player = "playerOne";
    }
}



// main function being called for button click 5
function buttonFiveClick(){
    timerReset()
        // computer player addition ----------------------
    if (player === "playerOne" && computerPlayerStatus === 1){
        document.querySelector('#button5').innerHTML = " X ";
        playerOneChoice.push(5);


        
        playerOneChoiceMinimax.push(5);



        buttonFive.removeEventListener('click', buttonFiveClick);
        document.querySelector('#playerUp').innerHTML = "Player X's turn.";
        checkWinnerOne()
        checkForTie()
        compPlayerDelayButtonFive()
        // console.log(computerValueArray);
        return player = "playerOne";
    }
        // -----------------------------------------------
    if (player === "playerOne" && computerPlayerStatus === 0) {
        document.querySelector('#button5').innerHTML = " X ";
        playerOneChoice.push(5);
        buttonFive.removeEventListener('click', buttonFiveClick);
        document.querySelector('#playerUp').innerHTML = "Player O's turn.";
        checkWinnerOne()
        checkWinnerTwo()
        checkForTie()
        return player = "playerTwo";
    } else if (player === "playerTwo") {
        document.querySelector('#button5').innerHTML = " O ";
        playerTwoChoice.push(5);
        buttonFive.removeEventListener('click', buttonFiveClick);
        document.querySelector('#playerUp').innerHTML = "Player X's turn.";
        checkWinnerOne()
        checkWinnerTwo()
        checkForTie()
        return player = "playerOne";
    }
}



// main function being called for button click 6
function buttonSixClick(){
    timerReset()
        // computer player addition ----------------------
    if (player === "playerOne" && computerPlayerStatus === 1){
        document.querySelector('#button6').innerHTML = " X ";
        playerOneChoice.push(6);


        
        playerOneChoiceMinimax.push(6);



        buttonSix.removeEventListener('click', buttonSixClick);
        document.querySelector('#playerUp').innerHTML = "Player X's turn.";
        checkWinnerOne()
        checkForTie()
        compPlayerDelayButtonSix()
        // console.log(computerValueArray)
        return player = "playerOne";
    }
        // -----------------------------------------------
    if (player === "playerOne" && computerPlayerStatus === 0) {
        document.querySelector('#button6').innerHTML = " X ";
        playerOneChoice.push(6);
        buttonSix.removeEventListener('click', buttonSixClick);
        document.querySelector('#playerUp').innerHTML = "Player O's turn.";
        checkWinnerOne()
        checkWinnerTwo()
        checkForTie()
        return player = "playerTwo";
    } else if (player === "playerTwo") {
        document.querySelector('#button6').innerHTML = " O ";
        playerTwoChoice.push(6);
        buttonSix.removeEventListener('click', buttonSixClick);
        document.querySelector('#playerUp').innerHTML = "Player X's turn.";
        checkWinnerOne()
        checkWinnerTwo()
        checkForTie()
        return player = "playerOne";
    }
}



// main function being called for button click 7
function buttonSevenClick(){
    timerReset()
        // computer player addition ----------------------
    if (player === "playerOne" && computerPlayerStatus === 1){
        document.querySelector('#button7').innerHTML = " X ";
        playerOneChoice.push(7);


        
        playerOneChoiceMinimax.push(7);



        buttonSeven.removeEventListener('click', buttonSevenClick);
        document.querySelector('#playerUp').innerHTML = "Player X's turn.";
        checkWinnerOne()
        checkForTie()
        compPlayerDelayButtonSeven()
        // console.log(computerValueArray);
        return player = "playerOne";
    }
        // -----------------------------------------------
    if (player === "playerOne" && computerPlayerStatus === 0) {
        document.querySelector('#button7').innerHTML = " X ";
        playerOneChoice.push(7);
        buttonSeven.removeEventListener('click', buttonSevenClick);
        document.querySelector('#playerUp').innerHTML = "Player O's turn.";
        checkWinnerOne()
        checkWinnerTwo()
        checkForTie()
        return player = "playerTwo";
    } else if (player === "playerTwo") {
        document.querySelector('#button7').innerHTML = " O ";
        playerTwoChoice.push(7);
        buttonSeven.removeEventListener('click', buttonSevenClick);
        document.querySelector('#playerUp').innerHTML = "Player X's turn.";
        checkWinnerOne()
        checkWinnerTwo()
        checkForTie()
        return player = "playerOne";
    }
}



// main function being called for button click 8
function buttonEightClick(){
   timerReset()
        // computer player addition ----------------------
    if (player === "playerOne" && computerPlayerStatus === 1){
        document.querySelector('#button8').innerHTML = " X ";
        playerOneChoice.push(8);


        
        playerOneChoiceMinimax.push(8);



        buttonEight.removeEventListener('click', buttonEightClick);
        document.querySelector('#playerUp').innerHTML = "Player X's turn.";
        checkWinnerOne()
        checkForTie()
        compPlayerDelayButtonEight()
        // console.log(computerValueArray);
        return player = "playerOne";
    }
        // -----------------------------------------------
    if (player === "playerOne" && computerPlayerStatus === 0) {
        document.querySelector('#button8').innerHTML = " X ";
        playerOneChoice.push(8);
        buttonEight.removeEventListener('click', buttonEightClick);
        document.querySelector('#playerUp').innerHTML = "Player O's turn.";
        checkWinnerOne()
        checkWinnerTwo()
        checkForTie()
        return player = "playerTwo";
    } else if (player === "playerTwo") {
        document.querySelector('#button8').innerHTML = " O ";
        playerTwoChoice.push(8);
        buttonEight.removeEventListener('click', buttonEightClick);
        document.querySelector('#playerUp').innerHTML = "Player X's turn.";
        checkWinnerOne()
        checkWinnerTwo()
        checkForTie()
        return player = "playerOne";
    }
}



// main function being called for button click 9
function buttonNineClick(){
    timerReset()
        // computer player addition ----------------------
    if (player === "playerOne" && computerPlayerStatus === 1){
        document.querySelector('#button9').innerHTML = " X ";
        playerOneChoice.push(9);


        
        playerOneChoiceMinimax.push(9);



        buttonNine.removeEventListener('click', buttonNineClick);
        document.querySelector('#playerUp').innerHTML = "Player X's turn.";
        checkWinnerOne()
        checkForTie()
        compPlayerDelayButtonNine()
        //console.log(computerValueArray);
        return player = "playerOne";
        }
        // -----------------------------------------------
    if (player === "playerOne" && computerPlayerStatus === 0) {
        document.querySelector('#button9').innerHTML = " X ";
        playerOneChoice.push(9);
        buttonNine.removeEventListener('click', buttonNineClick);
        document.querySelector('#playerUp').innerHTML = "Player O's turn.";
        checkWinnerOne()
        checkWinnerTwo()
        checkForTie()
        return player = "playerTwo";
    } else if (player === "playerTwo") {
        document.querySelector('#button9').innerHTML = " O ";
        playerTwoChoice.push(9);
        buttonNine.removeEventListener('click', buttonNineClick);
        document.querySelector('#playerUp').innerHTML = "Player X's turn.";
        checkWinnerOne()
        checkWinnerTwo()
        checkForTie()
        return player = "playerOne";
    }
}



// main function being called for button click reset
function buttonResetClick(){
    resetTimerReset ()
    //console.log("reset button clicked")
        document.querySelector('#playerUp').innerHTML = "Player X goes first!";
        buttonOne.addEventListener('click', buttonOneClick);
        buttonTwo.addEventListener('click', buttonTwoClick);
        buttonThree.addEventListener('click', buttonThreeClick);
        buttonFour.addEventListener('click', buttonFourClick);
        buttonFive.addEventListener('click', buttonFiveClick);
        buttonSix.addEventListener('click', buttonSixClick);
        buttonSeven.addEventListener('click', buttonSevenClick);
        buttonEight.addEventListener('click', buttonEightClick);
        buttonNine.addEventListener('click', buttonNineClick);
        buttonReset.addEventListener('click', buttonResetClick);
        document.querySelector('#button1').innerHTML = "&nbsp;";
        document.querySelector('#button2').innerHTML = "&nbsp;";
        document.querySelector('#button3').innerHTML = "&nbsp;";
        document.querySelector('#button4').innerHTML = "&nbsp;";
        document.querySelector('#button5').innerHTML = "&nbsp;";
        document.querySelector('#button6').innerHTML = "&nbsp;";
        document.querySelector('#button7').innerHTML = "&nbsp;";
        document.querySelector('#button8').innerHTML = "&nbsp;";
        document.querySelector('#button9').innerHTML = "&nbsp;";
    resetTieFlag()
        computerValueArray = [1,2,3,4,5,6,7,8,9];
        playerOneChoice = [];
        playerTwoChoice = [];
        computerPlayerStatus = 0;
        document.querySelector('#computerPlayerId').style.background = '';
    return player = "playerOne";
}



// reset tie flag
function resetTieFlag(){
    return tieFlag = 0;
}



// check if player 1 is a winner
function checkWinnerOne(){
    if (playerOneChoice.includes(1) && playerOneChoice.includes(2) && playerOneChoice.includes(3)){
        playerOneWins()
    } else if (playerOneChoice.includes(4) && playerOneChoice.includes(5) && playerOneChoice.includes(6)){
        playerOneWins()
    } else if (playerOneChoice.includes(7) && playerOneChoice.includes(8) && playerOneChoice.includes(9)){
        playerOneWins()
    } else if (playerOneChoice.includes(1) && playerOneChoice.includes(4) && playerOneChoice.includes(7)){  
        playerOneWins()
    } else if (playerOneChoice.includes(2) && playerOneChoice.includes(5) && playerOneChoice.includes(8)){
        playerOneWins()
    } else if (playerOneChoice.includes(3) && playerOneChoice.includes(6) && playerOneChoice.includes(9)){ 
        playerOneWins()
    } else if (playerOneChoice.includes(1) && playerOneChoice.includes(5) && playerOneChoice.includes(9)){          
        playerOneWins()
    } else if (playerOneChoice.includes(3) && playerOneChoice.includes(5) && playerOneChoice.includes(7)){   
        playerOneWins()
    } else {
    }
}



// check if player 2 is a winner
function checkWinnerTwo(){
    if (playerTwoChoice.includes(1) && playerTwoChoice.includes(2) && playerTwoChoice.includes(3)){
        playerTwoWins()
    } else if (playerTwoChoice.includes(4) && playerTwoChoice.includes(5) && playerTwoChoice.includes(6)){
        playerTwoWins()
    } else if (playerTwoChoice.includes(7) && playerTwoChoice.includes(8) && playerTwoChoice.includes(9)){
        playerTwoWins()
    } else if (playerTwoChoice.includes(1) && playerTwoChoice.includes(4) && playerTwoChoice.includes(7)){
        playerTwoWins()
    } else if (playerTwoChoice.includes(2) && playerTwoChoice.includes(5) && playerTwoChoice.includes(8)){
        playerTwoWins()
    } else if (playerTwoChoice.includes(3) && playerTwoChoice.includes(6) && playerTwoChoice.includes(9)){
        playerTwoWins()
    } else if (playerTwoChoice.includes(1) && playerTwoChoice.includes(5) && playerTwoChoice.includes(9)){
        playerTwoWins()
    } else if (playerTwoChoice.includes(3) && playerTwoChoice.includes(5) && playerTwoChoice.includes(7)){
        playerTwoWins()
    } else {
    }
}



// check for a tie
function checkForTie (){
    if (playerOneChoice.length === 5 && tieFlag === 0){
        document.querySelector('#playerUp').innerHTML = "It's a DRAW!";
        resetTimerReset()
    } else if (playerTwoChoice.length === 5 && tieFlag === 0){
        document.querySelector('#playerUp').innerHTML = "It's a DRAW!";
        resetTimerReset()
    }
}



// function for if player 1 wins
function playerOneWins(){
    resetTimerReset()
        document.querySelector('#playerUp').innerHTML = "PLAYER X WINS!";
        buttonOne.removeEventListener('click', buttonOneClick);
        buttonTwo.removeEventListener('click', buttonTwoClick);
        buttonThree.removeEventListener('click', buttonThreeClick);
        buttonFour.removeEventListener('click', buttonFourClick);
        buttonFive.removeEventListener('click', buttonFiveClick);
        buttonSix.removeEventListener('click', buttonSixClick);
        buttonSeven.removeEventListener('click', buttonSevenClick);
        buttonEight.removeEventListener('click', buttonEightClick);
        buttonNine.removeEventListener('click', buttonNineClick);
    playerOneScore()
    return tieFlag = 1;
}



// functio for if player 2 wins
function playerTwoWins(){
    resetTimerReset()
        document.querySelector('#playerUp').innerHTML = "PLAYER O WINS!";
        buttonOne.removeEventListener('click', buttonOneClick);
        buttonTwo.removeEventListener('click', buttonTwoClick);
        buttonThree.removeEventListener('click', buttonThreeClick);
        buttonFour.removeEventListener('click', buttonFourClick);
        buttonFive.removeEventListener('click', buttonFiveClick);
        buttonSix.removeEventListener('click', buttonSixClick);
        buttonSeven.removeEventListener('click', buttonSevenClick);
        buttonEight.removeEventListener('click', buttonEightClick);
        buttonNine.removeEventListener('click', buttonNineClick);
    playerTwoScore()
    return tieFlag = 2;
}



// function tracking player 1s score
function playerOneScore(){
        document.querySelector('#scoreX').innerHTML = "Player X's Score: " + (scorePlayerOne + 1);
    return scorePlayerOne = scorePlayerOne + 1;
}



// function tracking player 2s score
function playerTwoScore(){
        document.querySelector('#scoreO').innerHTML = "Player O's Score: " + (scorePlayerTwo + 1);
    return scorePlayerTwo = scorePlayerTwo + 1;
}



// computer player function and delay for button click 1
function compPlayerDelayButtonOne(){
    let delay = setInterval( () => {
    for(j=0;j<computerValueArray.length;j++){
        if (computerValueArray[j] === 1){
            computerValueArray.splice(j,1);
        }
    }
       // console.log(computerValueArray + " whats left on the board")
        computerValue = Math.floor(Math.random() * computerValueArray.length);
        playerTwoChoice.push(computerValueArray[computerValue]);

    checkWinnerTwo()
        // console.log(playerTwoChoice + " the computers choice")
    for (i=0;i<playerTwoChoice.length; i++){
        if (playerTwoChoice.includes(2) && tieFlag !== 1){
            document.querySelector('#button2').innerHTML = " O ";
            buttonTwo.removeEventListener('click', buttonTwoClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 2){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(3) && tieFlag !== 1){
            document.querySelector('#button3').innerHTML = " O ";
            buttonThree.removeEventListener('click', buttonThreeClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 3){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(4) && tieFlag !== 1){
            document.querySelector('#button4').innerHTML = " O ";
            buttonFour.removeEventListener('click', buttonFourClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 4){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(5) && tieFlag !== 1){
            document.querySelector('#button5').innerHTML = " O ";
            buttonFive.removeEventListener('click', buttonFiveClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 5){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(6) && tieFlag !== 1){
            document.querySelector('#button6').innerHTML = " O ";
            buttonSix.removeEventListener('click', buttonSixClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 6){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(7) && tieFlag !== 1){
            document.querySelector('#button7').innerHTML = " O ";
            buttonSeven.removeEventListener('click', buttonSevenClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 7){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(8) && tieFlag !== 1){
            document.querySelector('#button8').innerHTML = " O ";
            buttonEight.removeEventListener('click', buttonEightClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 8){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(9) && tieFlag !== 1){
            document.querySelector('#button9').innerHTML = " O ";
            buttonNine.removeEventListener('click', buttonNineClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 9){
                    computerValueArray.splice(j,1);
                }
            }
        }
    }
        return clearInterval(delay);
    }, 500);
}
        
        
      
// computer player function and delay for button click 2
function compPlayerDelayButtonTwo(){
    let delay = setInterval( () => {
    for(j=0;j<computerValueArray.length;j++){
        if (computerValueArray[j] === 2){
            computerValueArray.splice(j,1);
        }
    }
        computerValue = Math.floor(Math.random() * computerValueArray.length);
        playerTwoChoice.push(computerValueArray[computerValue]);
    checkWinnerTwo()
        //console.log(playerTwoChoice);
    for (i=0;i<playerTwoChoice.length; i++){
        if (playerTwoChoice.includes(1) && tieFlag !== 1){
            document.querySelector('#button1').innerHTML = " O ";
            buttonOne.removeEventListener('click', buttonOneClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 1){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(3) && tieFlag !== 1){
            document.querySelector('#button3').innerHTML = " O ";
            buttonThree.removeEventListener('click', buttonThreeClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 3){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(4) && tieFlag !== 1){
            document.querySelector('#button4').innerHTML = " O ";
            buttonFour.removeEventListener('click', buttonFourClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 4){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(5) && tieFlag !== 1){
            document.querySelector('#button5').innerHTML = " O ";
            buttonFive.removeEventListener('click', buttonFiveClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 5){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(6) && tieFlag !== 1){
            document.querySelector('#button6').innerHTML = " O ";
            buttonSix.removeEventListener('click', buttonSixClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 6){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(7) && tieFlag !== 1){
            document.querySelector('#button7').innerHTML = " O ";
            buttonSeven.removeEventListener('click', buttonSevenClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 7){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(8) && tieFlag !== 1){
            document.querySelector('#button8').innerHTML = " O ";
            buttonEight.removeEventListener('click', buttonEightClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 8){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(9) && tieFlag !== 1){
            document.querySelector('#button9').innerHTML = " O ";
            buttonNine.removeEventListener('click', buttonNineClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 9){
                    computerValueArray.splice(j,1);
                }
            }
        }
    }           
        return clearInterval(delay);
    }, 500);
}
            
            
    
// computer player function and delay for button click 3
function compPlayerDelayButtonThree(){
    let delay = setInterval( () => {
    for(j=0;j<computerValueArray.length;j++){
        if (computerValueArray[j] === 3){
            computerValueArray.splice(j,1);
        }
    }
        computerValue = Math.floor(Math.random() * computerValueArray.length);
        playerTwoChoice.push(computerValueArray[computerValue]);
    checkWinnerTwo()
        //console.log(playerTwoChoice);
    for (i=0;i<playerTwoChoice.length; i++){
        if (playerTwoChoice.includes(1) && tieFlag !== 1){
            document.querySelector('#button1').innerHTML = " O ";
            buttonOne.removeEventListener('click', buttonOneClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 1){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(2) && tieFlag !== 1){
            document.querySelector('#button2').innerHTML = " O ";
            buttonTwo.removeEventListener('click', buttonTwoClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 2){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(4) && tieFlag !== 1){
            document.querySelector('#button4').innerHTML = " O ";
            buttonFour.removeEventListener('click', buttonFourClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 4){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(5) && tieFlag !== 1){
            document.querySelector('#button5').innerHTML = " O ";
            buttonFive.removeEventListener('click', buttonFiveClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 5){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(6) && tieFlag !== 1){
            document.querySelector('#button6').innerHTML = " O ";
            buttonSix.removeEventListener('click', buttonSixClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 6){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(7) && tieFlag !== 1){
            document.querySelector('#button7').innerHTML = " O ";
            buttonSeven.removeEventListener('click', buttonSevenClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 7){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(8) && tieFlag !== 1){
            document.querySelector('#button8').innerHTML = " O ";
            buttonEight.removeEventListener('click', buttonEightClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 8){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(9) && tieFlag !== 1){
            document.querySelector('#button9').innerHTML = " O ";
            buttonNine.removeEventListener('click', buttonNineClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 9){
                    computerValueArray.splice(j,1);
                }
            }
        }
    }
        return clearInterval(delay);
    }, 500);
}                
                
                

// computer player function and delay for button click 4
function compPlayerDelayButtonFour(){
    let delay = setInterval( () => {
    for(j=0;j<computerValueArray.length;j++){
        if (computerValueArray[j] === 4){
            computerValueArray.splice(j,1);
        }
    }
        computerValue = Math.floor(Math.random() * computerValueArray.length);
        playerTwoChoice.push(computerValueArray[computerValue]);
    checkWinnerTwo()
        //console.log(playerTwoChoice);
    for (i=0;i<playerTwoChoice.length; i++){
        if (playerTwoChoice.includes(1) && tieFlag !== 1){
            document.querySelector('#button1').innerHTML = " O ";
            buttonOne.removeEventListener('click', buttonOneClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 1){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(2) && tieFlag !== 1){
            document.querySelector('#button2').innerHTML = " O ";
            buttonTwo.removeEventListener('click', buttonTwoClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 2){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(3) && tieFlag !== 1){
            document.querySelector('#button3').innerHTML = " O ";
            buttonThree.removeEventListener('click', buttonThreeClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 3){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(5) && tieFlag !== 1){
            document.querySelector('#button5').innerHTML = " O ";
            buttonFive.removeEventListener('click', buttonFiveClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 5){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(6) && tieFlag !== 1){
            document.querySelector('#button6').innerHTML = " O ";
            buttonSix.removeEventListener('click', buttonSixClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 6){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(7) && tieFlag !== 1){
            document.querySelector('#button7').innerHTML = " O ";
            buttonSeven.removeEventListener('click', buttonSevenClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 7){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(8) && tieFlag !== 1){
            document.querySelector('#button8').innerHTML = " O ";
            buttonEight.removeEventListener('click', buttonEightClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 8){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(9) && tieFlag !== 1){
            document.querySelector('#button9').innerHTML = " O ";
            buttonNine.removeEventListener('click', buttonNineClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 9){
                    computerValueArray.splice(j,1);
                }
            }
        }
    }
        return clearInterval(delay);
    }, 500);
}
                    
                    
       
// computer player function and delay for button click 5
function compPlayerDelayButtonFive(){
    let delay = setInterval( () => {
    for(j=0;j<computerValueArray.length;j++){
        if (computerValueArray[j] === 5){
            computerValueArray.splice(j,1);
        }
    }
        computerValue = Math.floor(Math.random() * computerValueArray.length);
        playerTwoChoice.push(computerValueArray[computerValue]);
    checkWinnerTwo()
        //console.log(playerTwoChoice);
    for (i=0;i<playerTwoChoice.length; i++){
        if (playerTwoChoice.includes(1) && tieFlag !== 1){
            document.querySelector('#button1').innerHTML = " O ";
            buttonOne.removeEventListener('click', buttonOneClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 1){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(2) && tieFlag !== 1){
            document.querySelector('#button2').innerHTML = " O ";
            buttonTwo.removeEventListener('click', buttonTwoClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 2){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(3) && tieFlag !== 1){
            document.querySelector('#button3').innerHTML = " O ";
            buttonThree.removeEventListener('click', buttonThreeClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 3){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(4) && tieFlag !== 1){
            document.querySelector('#button4').innerHTML = " O ";
            buttonFour.removeEventListener('click', buttonFourClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 4){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(6) && tieFlag !== 1){
            document.querySelector('#button6').innerHTML = " O ";
            buttonSix.removeEventListener('click', buttonSixClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 6){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(7) && tieFlag !== 1){
            document.querySelector('#button7').innerHTML = " O ";
            buttonSeven.removeEventListener('click', buttonSevenClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 7){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(8) && tieFlag !== 1){
            document.querySelector('#button8').innerHTML = " O ";
            buttonEight.removeEventListener('click', buttonEightClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 8){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(9) && tieFlag !== 1){
            document.querySelector('#button9').innerHTML = " O ";
            buttonNine.removeEventListener('click', buttonNineClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 9){
                    computerValueArray.splice(j,1);
                }
            }
        }
    }
        return clearInterval(delay);
    }, 500);
}
                        
                        
                
// computer player function and delay for button click 6
function compPlayerDelayButtonSix(){
    let delay = setInterval( () => {
    for(j=0;j<computerValueArray.length;j++){
        if (computerValueArray[j] === 6){
            computerValueArray.splice(j,1);
        }
    }
        computerValue = Math.floor(Math.random() * computerValueArray.length);
        playerTwoChoice.push(computerValueArray[computerValue]);
    checkWinnerTwo()
        //console.log(playerTwoChoice);
    for (i=0;i<playerTwoChoice.length; i++){
        if (playerTwoChoice.includes(1) && tieFlag !== 1){
            document.querySelector('#button1').innerHTML = " O ";
            buttonOne.removeEventListener('click', buttonOneClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 1){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(2) && tieFlag !== 1){
            document.querySelector('#button2').innerHTML = " O ";
            buttonTwo.removeEventListener('click', buttonTwoClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 2){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(3) && tieFlag !== 1){
            document.querySelector('#button3').innerHTML = " O ";
            buttonThree.removeEventListener('click', buttonThreeClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 3){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(4) && tieFlag !== 1){
            document.querySelector('#button4').innerHTML = " O ";
            buttonFour.removeEventListener('click', buttonFourClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 4){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(5) && tieFlag !== 1){
            document.querySelector('#button5').innerHTML = " O ";
            buttonFive.removeEventListener('click', buttonFiveClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 5){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(7) && tieFlag !== 1){
            document.querySelector('#button7').innerHTML = " O ";
            buttonSeven.removeEventListener('click', buttonSevenClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 7){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(8) && tieFlag !== 1){
            document.querySelector('#button8').innerHTML = " O ";
            buttonEight.removeEventListener('click', buttonEightClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 8){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(9) && tieFlag !== 1){
            document.querySelector('#button9').innerHTML = " O ";
            buttonNine.removeEventListener('click', buttonNineClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 9){
                    computerValueArray.splice(j,1);
                }
            }
        }
    }        
        return clearInterval(delay);
    }, 500);
}
                            
  

// computer player function and delay for button click 7
function compPlayerDelayButtonSeven(){
    let delay = setInterval( () => {
    for(j=0;j<computerValueArray.length;j++){
        if (computerValueArray[j] === 7){
            computerValueArray.splice(j,1);
        }
    }
        computerValue = Math.floor(Math.random() * computerValueArray.length);
        playerTwoChoice.push(computerValueArray[computerValue]);
    checkWinnerTwo()
        //console.log(playerTwoChoice);
    for (i=0;i<playerTwoChoice.length; i++){
        if (playerTwoChoice.includes(1) && tieFlag !== 1){
            document.querySelector('#button1').innerHTML = " O ";
            buttonOne.removeEventListener('click', buttonOneClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 1){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(2) && tieFlag !== 1){
            document.querySelector('#button2').innerHTML = " O ";
            buttonTwo.removeEventListener('click', buttonTwoClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 2){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(3) && tieFlag !== 1){
            document.querySelector('#button3').innerHTML = " O ";
            buttonThree.removeEventListener('click', buttonThreeClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 3){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(4) && tieFlag !== 1){
            document.querySelector('#button4').innerHTML = " O ";
            buttonFour.removeEventListener('click', buttonFourClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 4){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(5) && tieFlag !== 1){
            document.querySelector('#button5').innerHTML = " O ";
            buttonFive.removeEventListener('click', buttonFiveClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 5){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(6) && tieFlag !== 1){
            document.querySelector('#button6').innerHTML = " O ";
            buttonSix.removeEventListener('click', buttonSixClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 6){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(8) && tieFlag !== 1){
            document.querySelector('#button8').innerHTML = " O ";
            buttonEight.removeEventListener('click', buttonEightClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 8){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(9) && tieFlag !== 1){
            document.querySelector('#button9').innerHTML = " O ";
            buttonNine.removeEventListener('click', buttonNineClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 9){
                    computerValueArray.splice(j,1);
                }
            }
        }
    }
        return clearInterval(delay);
    }, 500);
}
                                
                                
                            
// computer player function and delay for button click 8
function compPlayerDelayButtonEight(){
    let delay = setInterval( () => {
    for(j=0;j<computerValueArray.length;j++){
        if (computerValueArray[j] === 8){
            computerValueArray.splice(j,1);
        }
    }
        computerValue = Math.floor(Math.random() * computerValueArray.length);
        playerTwoChoice.push(computerValueArray[computerValue]);
    checkWinnerTwo()
        //console.log(playerTwoChoice);
    for (i=0;i<playerTwoChoice.length; i++){
        if (playerTwoChoice.includes(1) && tieFlag !== 1){
            document.querySelector('#button1').innerHTML = " O ";
            buttonOne.removeEventListener('click', buttonOneClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 1){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(2) && tieFlag !== 1){
            document.querySelector('#button2').innerHTML = " O ";
            buttonTwo.removeEventListener('click', buttonTwoClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 2){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(3) && tieFlag !== 1){
            document.querySelector('#button3').innerHTML = " O ";
            buttonThree.removeEventListener('click', buttonThreeClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 3){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(4) && tieFlag !== 1){
            document.querySelector('#button4').innerHTML = " O ";
            buttonFour.removeEventListener('click', buttonFourClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 4){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(5) && tieFlag !== 1){
            document.querySelector('#button5').innerHTML = " O ";
            buttonFive.removeEventListener('click', buttonFiveClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 5){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(6) && tieFlag !== 1){
            document.querySelector('#button6').innerHTML = " O ";
            buttonSix.removeEventListener('click', buttonSixClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 6){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(7) && tieFlag !== 1){
            document.querySelector('#button7').innerHTML = " O ";
            buttonSeven.removeEventListener('click', buttonSevenClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 7){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(9) && tieFlag !== 1){
            document.querySelector('#button9').innerHTML = " O ";
            buttonNine.removeEventListener('click', buttonNineClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 9){
                    computerValueArray.splice(j,1);
                }
            }
        }
    }
        return clearInterval(delay);
    }, 500);
}
                                    
                                    
                    
// computer player function and delay for button click 9
function compPlayerDelayButtonNine(){
    let delay = setInterval( () => {
    for(j=0;j<computerValueArray.length;j++){
        if (computerValueArray[j] === 9){
            computerValueArray.splice(j,1);
        }
    }
        computerValue = Math.floor(Math.random() * computerValueArray.length);
        playerTwoChoice.push(computerValueArray[computerValue]);
    checkWinnerTwo()
        //console.log(playerTwoChoice);
    for (i=0;i<playerTwoChoice.length; i++){
        if (playerTwoChoice.includes(1) && tieFlag !== 1){
            document.querySelector('#button1').innerHTML = " O ";
            buttonOne.removeEventListener('click', buttonOneClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 1){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(2) && tieFlag !== 1){
            document.querySelector('#button2').innerHTML = " O ";
            buttonTwo.removeEventListener('click', buttonTwoClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 2){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(3) && tieFlag !== 1){
            document.querySelector('#button3').innerHTML = " O ";
            buttonThree.removeEventListener('click', buttonThreeClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 3){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(4) && tieFlag !== 1){
            document.querySelector('#button4').innerHTML = " O ";
            buttonFour.removeEventListener('click', buttonFourClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 4){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(5) && tieFlag !== 1){
            document.querySelector('#button5').innerHTML = " O ";
            buttonFive.removeEventListener('click', buttonFiveClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 5){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(6) && tieFlag !== 1){
            document.querySelector('#button6').innerHTML = " O ";
            buttonSix.removeEventListener('click', buttonSixClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 6){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(7) && tieFlag !== 1){
            document.querySelector('#button7').innerHTML = " O ";
            buttonSeven.removeEventListener('click', buttonSevenClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 7){
                    computerValueArray.splice(j,1);
                }
            }
        }  
        if (playerTwoChoice.includes(8) && tieFlag !== 1){
            document.querySelector('#button8').innerHTML = " O ";
            buttonEight.removeEventListener('click', buttonEightClick);
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 8){
                    computerValueArray.splice(j,1);
                }
            }
        }
    }
        return clearInterval(delay);
    }, 500);
}



// --------mini-max algorithm --------------------------------






// // function checking winner player 1 returning true or false
// function checkWinnerOneMiniMax(){
//     if (playerOneChoiceMinimax.includes(1) && playerOneChoiceMinimax.includes(2) && playerOneChoiceMinimax.includes(3)){
//         return true;
//     } else if (playerOneChoiceMinimax.includes(4) && playerOneChoiceMinimax.includes(5) && playerOneChoiceMinimax.includes(6)){
//         return true;
//     } else if (playerOneChoiceMinimax.includes(7) && playerOneChoiceMinimax.includes(8) && playerOneChoiceMinimax.includes(9)){
//         return true;
//     } else if (playerOneChoiceMinimax.includes(1) && playerOneChoiceMinimax.includes(4) && playerOneChoiceMinimax.includes(7)){  
//         return true;
//     } else if (playerOneChoiceMinimax.includes(2) && playerOneChoiceMinimax.includes(5) && playerOneChoiceMinimax.includes(8)){
//         return true;
//     } else if (playerOneChoiceMinimax.includes(3) && playerOneChoiceMinimax.includes(6) && playerOneChoiceMinimax.includes(9)){ 
//         return true;
//     } else if (playerOneChoiceMinimax.includes(1) && playerOneChoiceMinimax.includes(5) && playerOneChoiceMinimax.includes(9)){          
//         return true;
//     } else if (playerOneChoiceMinimax.includes(3) && playerOneChoiceMinimax.includes(5) && playerOneChoiceMinimax.includes(7)){   
//         return true;
//     } else { 
//         return false;
//     }
// }



// // function checking winner player 2 returning true or false
// function checkWinnerTwoMiniMax(){
//     if (playerTwoChoiceMinimax.includes(1) && playerTwoChoiceMinimax.includes(2) && playerTwoChoiceMinimax.includes(3)){
//         return true;
//     } else if (playerTwoChoiceMinimax.includes(4) && playerTwoChoiceMinimax.includes(5) && playerTwoChoiceMinimax.includes(6)){
//         return true;
//     } else if (playerTwoChoiceMinimax.includes(7) && playerTwoChoiceMinimax.includes(8) && playerTwoChoiceMinimax.includes(9)){
//         return true;
//     } else if (playerTwoChoiceMinimax.includes(1) && playerTwoChoiceMinimax.includes(4) && playerTwoChoiceMinimax.includes(7)){
//         return true;
//     } else if (playerTwoChoiceMinimax.includes(2) && playerTwoChoiceMinimax.includes(5) && playerTwoChoiceMinimax.includes(8)){
//         return true;
//     } else if (playerTwoChoiceMinimax.includes(3) && playerTwoChoiceMinimax.includes(6) && playerTwoChoiceMinimax.includes(9)){
//         return true;
//     } else if (playerTwoChoiceMinimax.includes(1) && playerTwoChoiceMinimax.includes(5) && playerTwoChoiceMinimax.includes(9)){
//         return true;
//     } else if (playerTwoChoiceMinimax.includes(3) && playerTwoChoiceMinimax.includes(5) && playerTwoChoiceMinimax.includes(7)){
//         return true;
//     } else {
//         return false;
//     }
// }



// // function checking for a tie returning true or false
// function checkForTieMiniMax (){
//     if (playerOneChoiceMinimax.length === 5 && tieFlag === 0){
//         return true;
//     } else if (playerTwoChoiceMinimax.length === 5 && tieFlag === 0){
//         return true;
//     } else {
//         return false;
//     }
// }
    



// let playerMini = "playerOne"


// // minimax function
// function miniMaxFunction(){
//     //console.log("minimax function fired")
    
//     let allTestPlayInfo = [];
    
//     console.log(computerValueArray)
    
//     if (checkWinnerOneMiniMax()) {
//         return  {score: -1 };
//     } 
//     else if (checkWinnerTwoMiniMax()){
//         return {score: 1};
//     } 
//     else if (checkForTieMiniMax()){
//         return {score: 0};
//     }
    
    
    

    
   
//     for (let k = 0; k < computerValueArray.length; k++){
//         const currentTestPlayInfo = {};
//         currentTestPlayInfo.index = (computerValueArray[k])
//         console.log(currentTestPlayInfo.index)

//         if (playerMini === "playerOne"){
//             playerOneChoiceMinimax.push(computerValueArray[k])
//             computerValueArray.splice(k,1)
//             console.log(playerOneChoiceMinimax + " p1cmm")
            
//         } 
//         if (playerMini === "smartComputer"){
//             playerTwoChoiceMinimax.push(computerValueArray[k])
//             computerValueArray.splice(k,1)
//             console.log(playerTwoChoiceMinimax + " p2cmm")
            
//         } 

        
//         if (playerMini === "smartComputer"){
           
//             playerMiniFunction()
//             const result = miniMaxFunction()
//             currentTestPlayInfo.score = result.score;
//             console.log(currentTestPlayInfo)
//         }
//         if (playerMini === "playerOne") {
            
//             playerMiniFunctionAi()
//             const result = miniMaxFunction()
//             currentTestPlayInfo.score = result.score;
//             console.log(currentTestPlayInfo)
//         }

        
                
   
       
//     }
        

//         let bestTestPlay = null;
        
//     if (playerMini === "smartComputer") {
//             let bestScore = -Infinity;
//             for (z = 0; z < allTestPlayInfo.length; z++){
                
//                 if (allTestPlay[z] > bestScore){
//                     bestScore = allTestPlayInfo[z];
//                     return bestTestPlay = z;

                    
//                 }
//             }

//     } else {
//             let bestScore = -Infinity;
//             for (z = 0; z < allTestPlayInfo.length; z++){
//                 if (allTestPlayInfo[z] < bestScore){
//                     bestScore = allTestPlayInfo[z];
//                     return bestTestPlay = z;
                    
                
//                 }
//             }
//     } 
  
        

// }

// function resetMiniMax() {
//     return score = -Infinity;
// }

// function playerMiniFunction(){
//     return playerMini = "playerOne";
// }

// function playerMiniFunctionAi(){
//     return playerMini = "smartComputer";
// }