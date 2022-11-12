//console.log("welcome")

// Grabbing buttons from index.HTML and storing them in main.JS
let buttonOne = document.querySelector('#button1')
let buttonTwo = document.querySelector('#button2')
let buttonThree = document.querySelector('#button3')
let buttonFour = document.querySelector('#button4')
let buttonFive = document.querySelector('#button5')
let buttonSix = document.querySelector('#button6')
let buttonSeven = document.querySelector('#button7')
let buttonEight = document.querySelector('#button8')
let buttonNine = document.querySelector('#button9')
let buttonReset = document.querySelector('#resetButtonId')
// computer player
let buttonComputerPlayer = document.querySelector('#computerPlayerId')



// Adding a click event listener to all of my JS stored buttons
buttonOne.addEventListener('click', buttonOneClick)
buttonTwo.addEventListener('click', buttonTwoClick)
buttonThree.addEventListener('click', buttonThreeClick)
buttonFour.addEventListener('click', buttonFourClick)
buttonFive.addEventListener('click', buttonFiveClick)
buttonSix.addEventListener('click', buttonSixClick)
buttonSeven.addEventListener('click', buttonSevenClick)
buttonEight.addEventListener('click', buttonEightClick)
buttonNine.addEventListener('click', buttonNineClick)
buttonReset.addEventListener('click', buttonResetClick)
// computer player
buttonComputerPlayer.addEventListener('click', buttonComputerPlayerClick)



// alternate players
let computerValueArray = [1,2,3,4,5,6,7,8,9]
let player = "playerOne"
let playerOneChoice = []
let playerTwoChoice = []
let playerTwoComputerChoice = []
let computerPlayerStatus = 0;

// computer - on function
function buttonComputerPlayerClick(){
    document.querySelector('#computerPlayerId').style.background = 'rgba(99, 185, 203, 0.5)';
    return computerPlayerStatus = 1;
}


// timer
let sec = 0;
let timer = setInterval( () => {
    if(sec < 0){
        console.log("stalling")
        return
        //return clearInterval(timer)
        //would think to add the innerHTML for random choice here but this is also my skip
    } 
    document.querySelector('#timerId').innerHTML = '00:' + sec;   
    sec--;
}, 1000);


// timer reset function
function timerReset(){
    return sec = 10;
}

function resetTimerReset(){
    return sec = 0;
}
// if i reset it how do i clear the interval for reset so that i dont have it adding characters every time it reaches 0. since its currently hanging at 0 every second.


let computerValue = 0;


// functions being called when each button is clicked
function buttonOneClick(){
    timerReset()
    //console.log("button 1 clicked")
    // computer player addition ----------------------
    if (player === "playerOne" && computerPlayerStatus === 1){
        document.querySelector('#button1').innerHTML = " X ";
        playerOneChoice.push(1)
        buttonOne.removeEventListener('click', buttonOneClick)
        document.querySelector('#playerUp').innerHTML = "Player X's turn."
        checkWinnerOne()
        checkForTie()
        compPlayerDelayButtonOne()
        //     for(j=0;j<computerValueArray.length;j++){
        //         if (computerValueArray[j] === 1){
        //             computerValueArray.splice(j,1);
        //         }
        //     }
        //     console.log(computerValueArray + " whats left on the board")
        // computerValue = Math.floor(Math.random() * computerValueArray.length);
        // playerTwoChoice.push(computerValueArray[computerValue])
        // checkWinnerTwo()
        //     console.log(playerTwoChoice + " the computers choice")
        //     for (i=0;i<playerTwoChoice.length; i++){
        //            if (playerTwoChoice.includes(2)){
        //         document.querySelector('#button2').innerHTML = " O "
        //         buttonTwo.removeEventListener('click', buttonTwoClick)
        //             for(j=0;j<computerValueArray.length;j++){
        //                 if (computerValueArray[j] === 2){
        //                     computerValueArray.splice(j,1);
        //                 }
        //             }
        //     }  if (playerTwoChoice.includes(3)){
        //         document.querySelector('#button3').innerHTML = " O "
        //         buttonThree.removeEventListener('click', buttonThreeClick)
        //             for(j=0;j<computerValueArray.length;j++){
        //                 if (computerValueArray[j] === 3){
        //                     computerValueArray.splice(j,1);
        //                 }
        //             }
        //     }  if (playerTwoChoice.includes(4)){
        //         document.querySelector('#button4').innerHTML = " O "
        //         buttonFour.removeEventListener('click', buttonFourClick)
        //             for(j=0;j<computerValueArray.length;j++){
        //                 if (computerValueArray[j] === 4){
        //                     computerValueArray.splice(j,1);
        //                 }
        //             }
        //     }  if (playerTwoChoice.includes(5)){
        //         document.querySelector('#button5').innerHTML = " O "
        //         buttonFive.removeEventListener('click', buttonFiveClick)
        //             for(j=0;j<computerValueArray.length;j++){
        //                 if (computerValueArray[j] === 5){
        //                     computerValueArray.splice(j,1);
        //                 }
        //             }
        //     }  if (playerTwoChoice.includes(6)){
        //         document.querySelector('#button6').innerHTML = " O "
        //         buttonSix.removeEventListener('click', buttonSixClick)
        //             for(j=0;j<computerValueArray.length;j++){
        //                 if (computerValueArray[j] === 6){
        //                     computerValueArray.splice(j,1);
        //                 }
        //             }
        //     }  if (playerTwoChoice.includes(7)){
        //         document.querySelector('#button7').innerHTML = " O "
        //         buttonSeven.removeEventListener('click', buttonSevenClick)
        //             for(j=0;j<computerValueArray.length;j++){
        //                 if (computerValueArray[j] === 7){
        //                     computerValueArray.splice(j,1);
        //                 }
        //             }
        //     }  if (playerTwoChoice.includes(8)){
        //         document.querySelector('#button8').innerHTML = " O "
        //         buttonEight.removeEventListener('click', buttonEightClick)
        //             for(j=0;j<computerValueArray.length;j++){
        //                 if (computerValueArray[j] === 8){
        //                     computerValueArray.splice(j,1);
        //                 }
        //             }
        //     }  if (playerTwoChoice.includes(9)){
        //         document.querySelector('#button9').innerHTML = " O "
        //         buttonNine.removeEventListener('click', buttonNineClick)
        //             for(j=0;j<computerValueArray.length;j++){
        //                 if (computerValueArray[j] === 9){
        //                     computerValueArray.splice(j,1);
        //                 }
        //             }
        //     }}
        console.log(computerValueArray + " whats left over after comp")
        return player = "playerOne"
    }
    // -----------------------------------------------
    if (player === "playerOne" && computerPlayerStatus === 0){
        document.querySelector('#button1').innerHTML = " X ";
        //document.querySelector('#button1').style.color = "red";
        playerOneChoice.push(1)
        buttonOne.removeEventListener('click', buttonOneClick)
        document.querySelector('#playerUp').innerHTML = "Player O's turn."
        checkWinnerOne()
        checkWinnerTwo()
        checkForTie()
        return player = "playerTwo"
    } else if (player === "playerTwo") {
        document.querySelector('#button1').innerHTML = " O "
        playerTwoChoice.push(1)
        buttonOne.removeEventListener('click', buttonOneClick)
        document.querySelector('#playerUp').innerHTML = "Player X's turn."
        checkWinnerOne()
        checkWinnerTwo()
        checkForTie()
        return player = "playerOne"
    }
}












function buttonTwoClick(){
    
timerReset()
//console.log("button 2 clicked")
// computer player addition ----------------------
if (player === "playerOne" && computerPlayerStatus === 1){
    document.querySelector('#button2').innerHTML = " X ";
    playerOneChoice.push(2)
    buttonTwo.removeEventListener('click', buttonTwoClick)
    document.querySelector('#playerUp').innerHTML = "Player X's turn."
    checkWinnerOne()
    checkForTie()
        for(j=0;j<computerValueArray.length;j++){
            if (computerValueArray[j] === 2){
                computerValueArray.splice(j,1);
            }
        }
    console.log(computerValueArray)
    computerValue = Math.floor(Math.random() * computerValueArray.length);
    playerTwoChoice.push(computerValueArray[computerValue])
    checkWinnerTwo()
        console.log(playerTwoChoice)
//-------------------------------
    for (i=0;i<playerTwoChoice.length; i++){
        if (playerTwoChoice.includes(1)){
        document.querySelector('#button1').innerHTML = " O "
        buttonOne.removeEventListener('click', buttonOneClick)
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 1){
                    computerValueArray.splice(j,1);
                }
            }
    }  if (playerTwoChoice.includes(3)){
        document.querySelector('#button3').innerHTML = " O "
        buttonThree.removeEventListener('click', buttonThreeClick)
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 3){
                    computerValueArray.splice(j,1);
                }
            }
    }  if (playerTwoChoice.includes(4)){
        document.querySelector('#button4').innerHTML = " O "
        buttonFour.removeEventListener('click', buttonFourClick)
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 4){
                    computerValueArray.splice(j,1);
                }
            }
    }  if (playerTwoChoice.includes(5)){
        document.querySelector('#button5').innerHTML = " O "
        buttonFive.removeEventListener('click', buttonFiveClick)
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 5){
                    computerValueArray.splice(j,1);
                }
            }
    }  if (playerTwoChoice.includes(6)){
        document.querySelector('#button6').innerHTML = " O "
        buttonSix.removeEventListener('click', buttonSixClick)
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 6){
                    computerValueArray.splice(j,1);
                }
            }
    }  if (playerTwoChoice.includes(7)){
        document.querySelector('#button7').innerHTML = " O "
        buttonSeven.removeEventListener('click', buttonSevenClick)
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 7){
                    computerValueArray.splice(j,1);
                }
            }
    }  if (playerTwoChoice.includes(8)){
        document.querySelector('#button8').innerHTML = " O "
        buttonEight.removeEventListener('click', buttonEightClick)
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 8){
                    computerValueArray.splice(j,1);
                }
            }
    }  if (playerTwoChoice.includes(9)){
        document.querySelector('#button9').innerHTML = " O "
        buttonNine.removeEventListener('click', buttonNineClick)
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 9){
                    computerValueArray.splice(j,1);
                }
            }
    }}
    console.log(computerValueArray)


    
    return player = "playerOne"
}
// -----------------------------------------------
    if (player === "playerOne" && computerPlayerStatus === 0) {
        document.querySelector('#button2').innerHTML = " X "
        //document.querySelector('#button2').style.color = "red";
        playerOneChoice.push(2)
        buttonTwo.removeEventListener('click', buttonTwoClick)
        document.querySelector('#playerUp').innerHTML = "Player O's turn."
        checkWinnerOne()
        checkWinnerTwo()
        checkForTie()
        return player = "playerTwo"
    } else if (player === "playerTwo") {
        document.querySelector('#button2').innerHTML = " O "
        playerTwoChoice.push(2)
        buttonTwo.removeEventListener('click', buttonTwoClick)
        document.querySelector('#playerUp').innerHTML = "Player X's turn."
        checkWinnerOne()
        checkWinnerTwo()
        checkForTie()
        return player = "playerOne"
    }
}











function buttonThreeClick(){
    timerReset()
    //console.log("button 3 clicked")

    // computer player addition ----------------------
if (player === "playerOne" && computerPlayerStatus === 1){
    document.querySelector('#button3').innerHTML = " X ";
    playerOneChoice.push(3)
    buttonThree.removeEventListener('click', buttonThreeClick)
    document.querySelector('#playerUp').innerHTML = "Player X's turn."
    checkWinnerOne()
    checkForTie()
        for(j=0;j<computerValueArray.length;j++){
            if (computerValueArray[j] === 3){
                computerValueArray.splice(j,1);
            }
        }
    console.log(computerValueArray)
    computerValue = Math.floor(Math.random() * computerValueArray.length);
    playerTwoChoice.push(computerValueArray[computerValue])
    checkWinnerTwo()
        console.log(playerTwoChoice)
//-------------------------------
    for (i=0;i<playerTwoChoice.length; i++){
        if (playerTwoChoice.includes(1)){
        document.querySelector('#button1').innerHTML = " O "
        buttonOne.removeEventListener('click', buttonOneClick)
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 1){
                    computerValueArray.splice(j,1);
                }
            }
    }  if (playerTwoChoice.includes(2)){
        document.querySelector('#button2').innerHTML = " O "
        buttonTwo.removeEventListener('click', buttonTwoClick)
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 2){
                    computerValueArray.splice(j,1);
                }
            }
    }  if (playerTwoChoice.includes(4)){
        document.querySelector('#button4').innerHTML = " O "
        buttonFour.removeEventListener('click', buttonFourClick)
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 4){
                    computerValueArray.splice(j,1);
                }
            }
    }  if (playerTwoChoice.includes(5)){
        document.querySelector('#button5').innerHTML = " O "
        buttonFive.removeEventListener('click', buttonFiveClick)
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 5){
                    computerValueArray.splice(j,1);
                }
            }
    }  if (playerTwoChoice.includes(6)){
        document.querySelector('#button6').innerHTML = " O "
        buttonSix.removeEventListener('click', buttonSixClick)
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 6){
                    computerValueArray.splice(j,1);
                }
            }
    }  if (playerTwoChoice.includes(7)){
        document.querySelector('#button7').innerHTML = " O "
        buttonSeven.removeEventListener('click', buttonSevenClick)
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 7){
                    computerValueArray.splice(j,1);
                }
            }
    }  if (playerTwoChoice.includes(8)){
        document.querySelector('#button8').innerHTML = " O "
        buttonEight.removeEventListener('click', buttonEightClick)
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 8){
                    computerValueArray.splice(j,1);
                }
            }
    }  if (playerTwoChoice.includes(9)){
        document.querySelector('#button9').innerHTML = " O "
        buttonNine.removeEventListener('click', buttonNineClick)
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 9){
                    computerValueArray.splice(j,1);
                }
            }
    }}
    console.log(computerValueArray)


    
    return player = "playerOne"
}
// -----------------------------------------------


    if (player === "playerOne" && computerPlayerStatus === 0) {
        document.querySelector('#button3').innerHTML = " X "
        //document.querySelector('#button3').style.color = "red";
        playerOneChoice.push(3)
        buttonThree.removeEventListener('click', buttonThreeClick)
        document.querySelector('#playerUp').innerHTML = "Player O's turn."
        checkWinnerOne()
        checkWinnerTwo()
        checkForTie()
        return player = "playerTwo"
    } else if (player === "playerTwo") {
        document.querySelector('#button3').innerHTML = " O "
        playerTwoChoice.push(3)
        buttonThree.removeEventListener('click', buttonThreeClick)
        document.querySelector('#playerUp').innerHTML = "Player X's turn."
        checkWinnerOne()
        checkWinnerTwo()
        checkForTie()
        return player = "playerOne"
    }
}










function buttonFourClick(){
    timerReset()
    //console.log("button 4 clicked")

    // computer player addition ----------------------
    if (player === "playerOne" && computerPlayerStatus === 1){
        document.querySelector('#button4').innerHTML = " X ";
        playerOneChoice.push(4)
        buttonFour.removeEventListener('click', buttonFourClick)
        document.querySelector('#playerUp').innerHTML = "Player X's turn."
        checkWinnerOne()
        checkForTie()
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 4){
                    computerValueArray.splice(j,1);
                }
            }
        console.log(computerValueArray)
        computerValue = Math.floor(Math.random() * computerValueArray.length);
        playerTwoChoice.push(computerValueArray[computerValue])
        checkWinnerTwo()
            console.log(playerTwoChoice)
    //-------------------------------
        for (i=0;i<playerTwoChoice.length; i++){
            if (playerTwoChoice.includes(1)){
            document.querySelector('#button1').innerHTML = " O "
            buttonOne.removeEventListener('click', buttonOneClick)
                for(j=0;j<computerValueArray.length;j++){
                    if (computerValueArray[j] === 1){
                        computerValueArray.splice(j,1);
                    }
                }
        }  if (playerTwoChoice.includes(2)){
            document.querySelector('#button2').innerHTML = " O "
            buttonTwo.removeEventListener('click', buttonTwoClick)
                for(j=0;j<computerValueArray.length;j++){
                    if (computerValueArray[j] === 2){
                        computerValueArray.splice(j,1);
                    }
                }
        }  if (playerTwoChoice.includes(3)){
            document.querySelector('#button3').innerHTML = " O "
            buttonThree.removeEventListener('click', buttonThreeClick)
                for(j=0;j<computerValueArray.length;j++){
                    if (computerValueArray[j] === 3){
                        computerValueArray.splice(j,1);
                    }
                }
        }  if (playerTwoChoice.includes(5)){
            document.querySelector('#button5').innerHTML = " O "
            buttonFive.removeEventListener('click', buttonFiveClick)
                for(j=0;j<computerValueArray.length;j++){
                    if (computerValueArray[j] === 5){
                        computerValueArray.splice(j,1);
                    }
                }
        }  if (playerTwoChoice.includes(6)){
            document.querySelector('#button6').innerHTML = " O "
            buttonSix.removeEventListener('click', buttonSixClick)
                for(j=0;j<computerValueArray.length;j++){
                    if (computerValueArray[j] === 6){
                        computerValueArray.splice(j,1);
                    }
                }
        }  if (playerTwoChoice.includes(7)){
            document.querySelector('#button7').innerHTML = " O "
            buttonSeven.removeEventListener('click', buttonSevenClick)
                for(j=0;j<computerValueArray.length;j++){
                    if (computerValueArray[j] === 7){
                        computerValueArray.splice(j,1);
                    }
                }
        }  if (playerTwoChoice.includes(8)){
            document.querySelector('#button8').innerHTML = " O "
            buttonEight.removeEventListener('click', buttonEightClick)
                for(j=0;j<computerValueArray.length;j++){
                    if (computerValueArray[j] === 8){
                        computerValueArray.splice(j,1);
                    }
                }
        }  if (playerTwoChoice.includes(9)){
            document.querySelector('#button9').innerHTML = " O "
            buttonNine.removeEventListener('click', buttonNineClick)
                for(j=0;j<computerValueArray.length;j++){
                    if (computerValueArray[j] === 9){
                        computerValueArray.splice(j,1);
                    }
                }
        }}
        console.log(computerValueArray)
    
    
        
        return player = "playerOne"
    }
    // -----------------------------------------------

    if (player === "playerOne" && computerPlayerStatus === 0) {
        document.querySelector('#button4').innerHTML = " X "
        //document.querySelector('#button4').style.color = "red";
        playerOneChoice.push(4)
        buttonFour.removeEventListener('click', buttonFourClick)
        document.querySelector('#playerUp').innerHTML = "Player O's turn."
        checkWinnerOne()
        checkWinnerTwo()
        checkForTie()
        return player = "playerTwo"
    } else if (player === "playerTwo") {
        document.querySelector('#button4').innerHTML = " O "
        playerTwoChoice.push(4)
        buttonFour.removeEventListener('click', buttonFourClick)
        document.querySelector('#playerUp').innerHTML = "Player X's turn."
        checkWinnerOne()
        checkWinnerTwo()
        checkForTie()
        return player = "playerOne"
    }
}












function buttonFiveClick(){
    timerReset()
    //console.log("button 5 clicked")


      // computer player addition ----------------------
      if (player === "playerOne" && computerPlayerStatus === 1){
        document.querySelector('#button5').innerHTML = " X ";
        playerOneChoice.push(5)
        buttonFive.removeEventListener('click', buttonFiveClick)
        document.querySelector('#playerUp').innerHTML = "Player X's turn."
        checkWinnerOne()
        checkForTie()
            for(j=0;j<computerValueArray.length;j++){
                if (computerValueArray[j] === 5){
                    computerValueArray.splice(j,1);
                }
            }
        console.log(computerValueArray)
        computerValue = Math.floor(Math.random() * computerValueArray.length);
        playerTwoChoice.push(computerValueArray[computerValue])
        checkWinnerTwo()
            console.log(playerTwoChoice)
    //-------------------------------
        for (i=0;i<playerTwoChoice.length; i++){
            if (playerTwoChoice.includes(1)){
            document.querySelector('#button1').innerHTML = " O "
            buttonOne.removeEventListener('click', buttonOneClick)
                for(j=0;j<computerValueArray.length;j++){
                    if (computerValueArray[j] === 1){
                        computerValueArray.splice(j,1);
                    }
                }
        }  if (playerTwoChoice.includes(2)){
            document.querySelector('#button2').innerHTML = " O "
            buttonTwo.removeEventListener('click', buttonTwoClick)
                for(j=0;j<computerValueArray.length;j++){
                    if (computerValueArray[j] === 2){
                        computerValueArray.splice(j,1);
                    }
                }
        }  if (playerTwoChoice.includes(3)){
            document.querySelector('#button3').innerHTML = " O "
            buttonThree.removeEventListener('click', buttonThreeClick)
                for(j=0;j<computerValueArray.length;j++){
                    if (computerValueArray[j] === 3){
                        computerValueArray.splice(j,1);
                    }
                }
        }  if (playerTwoChoice.includes(4)){
            document.querySelector('#button4').innerHTML = " O "
            buttonFour.removeEventListener('click', buttonFourClick)
                for(j=0;j<computerValueArray.length;j++){
                    if (computerValueArray[j] === 4){
                        computerValueArray.splice(j,1);
                    }
                }
        }  if (playerTwoChoice.includes(6)){
            document.querySelector('#button6').innerHTML = " O "
            buttonSix.removeEventListener('click', buttonSixClick)
                for(j=0;j<computerValueArray.length;j++){
                    if (computerValueArray[j] === 6){
                        computerValueArray.splice(j,1);
                    }
                }
        }  if (playerTwoChoice.includes(7)){
            document.querySelector('#button7').innerHTML = " O "
            buttonSeven.removeEventListener('click', buttonSevenClick)
                for(j=0;j<computerValueArray.length;j++){
                    if (computerValueArray[j] === 7){
                        computerValueArray.splice(j,1);
                    }
                }
        }  if (playerTwoChoice.includes(8)){
            document.querySelector('#button8').innerHTML = " O "
            buttonEight.removeEventListener('click', buttonEightClick)
                for(j=0;j<computerValueArray.length;j++){
                    if (computerValueArray[j] === 8){
                        computerValueArray.splice(j,1);
                    }
                }
        }  if (playerTwoChoice.includes(9)){
            document.querySelector('#button9').innerHTML = " O "
            buttonNine.removeEventListener('click', buttonNineClick)
                for(j=0;j<computerValueArray.length;j++){
                    if (computerValueArray[j] === 9){
                        computerValueArray.splice(j,1);
                    }
                }
        }}
        console.log(computerValueArray)
    
    
        
        return player = "playerOne"
    }
    // -----------------------------------------------

    if (player === "playerOne" && computerPlayerStatus === 0) {
        document.querySelector('#button5').innerHTML = " X "
        //document.querySelector('#button5').style.color = "red";
        playerOneChoice.push(5)
        buttonFive.removeEventListener('click', buttonFiveClick)
        document.querySelector('#playerUp').innerHTML = "Player O's turn."
        checkWinnerOne()
        checkWinnerTwo()
        checkForTie()
        return player = "playerTwo"
    } else if (player === "playerTwo") {
        document.querySelector('#button5').innerHTML = " O "
        playerTwoChoice.push(5)
        buttonFive.removeEventListener('click', buttonFiveClick)
        document.querySelector('#playerUp').innerHTML = "Player X's turn."
        checkWinnerOne()
        checkWinnerTwo()
        checkForTie()
        return player = "playerOne"
    }
}












function buttonSixClick(){
    timerReset()
    //console.log("button 6 clicked")
          // computer player addition ----------------------
          if (player === "playerOne" && computerPlayerStatus === 1){
            document.querySelector('#button6').innerHTML = " X ";
            playerOneChoice.push(6)
            buttonSix.removeEventListener('click', buttonSixClick)
            document.querySelector('#playerUp').innerHTML = "Player X's turn."
            checkWinnerOne()
            checkForTie()
                for(j=0;j<computerValueArray.length;j++){
                    if (computerValueArray[j] === 6){
                        computerValueArray.splice(j,1);
                    }
                }
            console.log(computerValueArray)
            computerValue = Math.floor(Math.random() * computerValueArray.length);
            playerTwoChoice.push(computerValueArray[computerValue])
            checkWinnerTwo()
                console.log(playerTwoChoice)
        //-------------------------------
            for (i=0;i<playerTwoChoice.length; i++){
                if (playerTwoChoice.includes(1)){
                document.querySelector('#button1').innerHTML = " O "
                buttonOne.removeEventListener('click', buttonOneClick)
                    for(j=0;j<computerValueArray.length;j++){
                        if (computerValueArray[j] === 1){
                            computerValueArray.splice(j,1);
                        }
                    }
            }  if (playerTwoChoice.includes(2)){
                document.querySelector('#button2').innerHTML = " O "
                buttonTwo.removeEventListener('click', buttonTwoClick)
                    for(j=0;j<computerValueArray.length;j++){
                        if (computerValueArray[j] === 2){
                            computerValueArray.splice(j,1);
                        }
                    }
            }  if (playerTwoChoice.includes(3)){
                document.querySelector('#button3').innerHTML = " O "
                buttonThree.removeEventListener('click', buttonThreeClick)
                    for(j=0;j<computerValueArray.length;j++){
                        if (computerValueArray[j] === 3){
                            computerValueArray.splice(j,1);
                        }
                    }
            }  if (playerTwoChoice.includes(4)){
                document.querySelector('#button4').innerHTML = " O "
                buttonFour.removeEventListener('click', buttonFourClick)
                    for(j=0;j<computerValueArray.length;j++){
                        if (computerValueArray[j] === 4){
                            computerValueArray.splice(j,1);
                        }
                    }
            }  if (playerTwoChoice.includes(5)){
                document.querySelector('#button5').innerHTML = " O "
                buttonFive.removeEventListener('click', buttonFiveClick)
                    for(j=0;j<computerValueArray.length;j++){
                        if (computerValueArray[j] === 5){
                            computerValueArray.splice(j,1);
                        }
                    }
            }  if (playerTwoChoice.includes(7)){
                document.querySelector('#button7').innerHTML = " O "
                buttonSeven.removeEventListener('click', buttonSevenClick)
                    for(j=0;j<computerValueArray.length;j++){
                        if (computerValueArray[j] === 7){
                            computerValueArray.splice(j,1);
                        }
                    }
            }  if (playerTwoChoice.includes(8)){
                document.querySelector('#button8').innerHTML = " O "
                buttonEight.removeEventListener('click', buttonEightClick)
                    for(j=0;j<computerValueArray.length;j++){
                        if (computerValueArray[j] === 8){
                            computerValueArray.splice(j,1);
                        }
                    }
            }  if (playerTwoChoice.includes(9)){
                document.querySelector('#button9').innerHTML = " O "
                buttonNine.removeEventListener('click', buttonNineClick)
                    for(j=0;j<computerValueArray.length;j++){
                        if (computerValueArray[j] === 9){
                            computerValueArray.splice(j,1);
                        }
                    }
            }}
            console.log(computerValueArray)
        
        
            
            return player = "playerOne"
        }
        // -----------------------------------------------
    if (player === "playerOne" && computerPlayerStatus === 0) {
        document.querySelector('#button6').innerHTML = " X "
        //document.querySelector('#button6').style.color = "red";
        playerOneChoice.push(6)
        buttonSix.removeEventListener('click', buttonSixClick)
        document.querySelector('#playerUp').innerHTML = "Player O's turn."
        checkWinnerOne()
        checkWinnerTwo()
        checkForTie()
        return player = "playerTwo"
    } else if (player === "playerTwo") {
        document.querySelector('#button6').innerHTML = " O "
        playerTwoChoice.push(6)
        buttonSix.removeEventListener('click', buttonSixClick)
        document.querySelector('#playerUp').innerHTML = "Player X's turn."
        checkWinnerOne()
        checkWinnerTwo()
        checkForTie()
        return player = "playerOne"
    }
}













function buttonSevenClick(){
    timerReset()
    //console.log("button 7 clicked")
              // computer player addition ----------------------
              if (player === "playerOne" && computerPlayerStatus === 1){
                document.querySelector('#button7').innerHTML = " X ";
                playerOneChoice.push(7)
                buttonSeven.removeEventListener('click', buttonSevenClick)
                document.querySelector('#playerUp').innerHTML = "Player X's turn."
                checkWinnerOne()
                checkForTie()
                    for(j=0;j<computerValueArray.length;j++){
                        if (computerValueArray[j] === 7){
                            computerValueArray.splice(j,1);
                        }
                    }
                console.log(computerValueArray)
                computerValue = Math.floor(Math.random() * computerValueArray.length);
                playerTwoChoice.push(computerValueArray[computerValue])
                checkWinnerTwo()
                    console.log(playerTwoChoice)
            //-------------------------------
                for (i=0;i<playerTwoChoice.length; i++){
                    if (playerTwoChoice.includes(1)){
                    document.querySelector('#button1').innerHTML = " O "
                    buttonOne.removeEventListener('click', buttonOneClick)
                        for(j=0;j<computerValueArray.length;j++){
                            if (computerValueArray[j] === 1){
                                computerValueArray.splice(j,1);
                            }
                        }
                }  if (playerTwoChoice.includes(2)){
                    document.querySelector('#button2').innerHTML = " O "
                    buttonTwo.removeEventListener('click', buttonTwoClick)
                        for(j=0;j<computerValueArray.length;j++){
                            if (computerValueArray[j] === 2){
                                computerValueArray.splice(j,1);
                            }
                        }
                }  if (playerTwoChoice.includes(3)){
                    document.querySelector('#button3').innerHTML = " O "
                    buttonThree.removeEventListener('click', buttonThreeClick)
                        for(j=0;j<computerValueArray.length;j++){
                            if (computerValueArray[j] === 3){
                                computerValueArray.splice(j,1);
                            }
                        }
                }  if (playerTwoChoice.includes(4)){
                    document.querySelector('#button4').innerHTML = " O "
                    buttonFour.removeEventListener('click', buttonFourClick)
                        for(j=0;j<computerValueArray.length;j++){
                            if (computerValueArray[j] === 4){
                                computerValueArray.splice(j,1);
                            }
                        }
                }  if (playerTwoChoice.includes(5)){
                    document.querySelector('#button5').innerHTML = " O "
                    buttonFive.removeEventListener('click', buttonFiveClick)
                        for(j=0;j<computerValueArray.length;j++){
                            if (computerValueArray[j] === 5){
                                computerValueArray.splice(j,1);
                            }
                        }
                }  if (playerTwoChoice.includes(6)){
                    document.querySelector('#button6').innerHTML = " O "
                    buttonSix.removeEventListener('click', buttonSixClick)
                        for(j=0;j<computerValueArray.length;j++){
                            if (computerValueArray[j] === 6){
                                computerValueArray.splice(j,1);
                            }
                        }
                }  if (playerTwoChoice.includes(8)){
                    document.querySelector('#button8').innerHTML = " O "
                    buttonEight.removeEventListener('click', buttonEightClick)
                        for(j=0;j<computerValueArray.length;j++){
                            if (computerValueArray[j] === 8){
                                computerValueArray.splice(j,1);
                            }
                        }
                }  if (playerTwoChoice.includes(9)){
                    document.querySelector('#button9').innerHTML = " O "
                    buttonNine.removeEventListener('click', buttonNineClick)
                        for(j=0;j<computerValueArray.length;j++){
                            if (computerValueArray[j] === 9){
                                computerValueArray.splice(j,1);
                            }
                        }
                }}
                console.log(computerValueArray)
            
            
                
                return player = "playerOne"
            }
            // -----------------------------------------------
    if (player === "playerOne" && computerPlayerStatus === 0) {
        document.querySelector('#button7').innerHTML = " X "
        //document.querySelector('#button7').style.color = "red";
        playerOneChoice.push(7)
        buttonSeven.removeEventListener('click', buttonSevenClick)
        document.querySelector('#playerUp').innerHTML = "Player O's turn."
        checkWinnerOne()
        checkWinnerTwo()
        checkForTie()
        return player = "playerTwo"
    } else if (player === "playerTwo") {
        document.querySelector('#button7').innerHTML = " O "
        playerTwoChoice.push(7)
        buttonSeven.removeEventListener('click', buttonSevenClick)
        document.querySelector('#playerUp').innerHTML = "Player X's turn."
        checkWinnerOne()
        checkWinnerTwo()
        checkForTie()
        return player = "playerOne"
    }
}











function buttonEightClick(){
   timerReset()
    //console.log("button 8 clicked")
                  // computer player addition ----------------------
                  if (player === "playerOne" && computerPlayerStatus === 1){
                    document.querySelector('#button8').innerHTML = " X ";
                    playerOneChoice.push(8)
                    buttonEight.removeEventListener('click', buttonEightClick)
                    document.querySelector('#playerUp').innerHTML = "Player X's turn."
                    checkWinnerOne()
                    checkForTie()
                        for(j=0;j<computerValueArray.length;j++){
                            if (computerValueArray[j] === 8){
                                computerValueArray.splice(j,1);
                            }
                        }
                    console.log(computerValueArray)
                    computerValue = Math.floor(Math.random() * computerValueArray.length);
                    playerTwoChoice.push(computerValueArray[computerValue])
                    checkWinnerTwo()
                        console.log(playerTwoChoice)
                //-------------------------------
                    for (i=0;i<playerTwoChoice.length; i++){
                        if (playerTwoChoice.includes(1)){
                        document.querySelector('#button1').innerHTML = " O "
                        buttonOne.removeEventListener('click', buttonOneClick)
                            for(j=0;j<computerValueArray.length;j++){
                                if (computerValueArray[j] === 1){
                                    computerValueArray.splice(j,1);
                                }
                            }
                    }  if (playerTwoChoice.includes(2)){
                        document.querySelector('#button2').innerHTML = " O "
                        buttonTwo.removeEventListener('click', buttonTwoClick)
                            for(j=0;j<computerValueArray.length;j++){
                                if (computerValueArray[j] === 2){
                                    computerValueArray.splice(j,1);
                                }
                            }
                    }  if (playerTwoChoice.includes(3)){
                        document.querySelector('#button3').innerHTML = " O "
                        buttonThree.removeEventListener('click', buttonThreeClick)
                            for(j=0;j<computerValueArray.length;j++){
                                if (computerValueArray[j] === 3){
                                    computerValueArray.splice(j,1);
                                }
                            }
                    }  if (playerTwoChoice.includes(4)){
                        document.querySelector('#button4').innerHTML = " O "
                        buttonFour.removeEventListener('click', buttonFourClick)
                            for(j=0;j<computerValueArray.length;j++){
                                if (computerValueArray[j] === 4){
                                    computerValueArray.splice(j,1);
                                }
                            }
                    }  if (playerTwoChoice.includes(5)){
                        document.querySelector('#button5').innerHTML = " O "
                        buttonFive.removeEventListener('click', buttonFiveClick)
                            for(j=0;j<computerValueArray.length;j++){
                                if (computerValueArray[j] === 5){
                                    computerValueArray.splice(j,1);
                                }
                            }
                    }  if (playerTwoChoice.includes(6)){
                        document.querySelector('#button6').innerHTML = " O "
                        buttonSix.removeEventListener('click', buttonSixClick)
                            for(j=0;j<computerValueArray.length;j++){
                                if (computerValueArray[j] === 6){
                                    computerValueArray.splice(j,1);
                                }
                            }
                    }  if (playerTwoChoice.includes(7)){
                        document.querySelector('#button7').innerHTML = " O "
                        buttonSeven.removeEventListener('click', buttonSevenClick)
                            for(j=0;j<computerValueArray.length;j++){
                                if (computerValueArray[j] === 7){
                                    computerValueArray.splice(j,1);
                                }
                            }
                    }  if (playerTwoChoice.includes(9)){
                        document.querySelector('#button9').innerHTML = " O "
                        buttonNine.removeEventListener('click', buttonNineClick)
                            for(j=0;j<computerValueArray.length;j++){
                                if (computerValueArray[j] === 9){
                                    computerValueArray.splice(j,1);
                                }
                            }
                    }}
                    console.log(computerValueArray)
                
                
                    
                    return player = "playerOne"
                }
                // -----------------------------------------------
    if (player === "playerOne" && computerPlayerStatus === 0) {
        document.querySelector('#button8').innerHTML = " X "
        //document.querySelector('#button8').style.color = "red";
        playerOneChoice.push(8)
        buttonEight.removeEventListener('click', buttonEightClick)
        document.querySelector('#playerUp').innerHTML = "Player O's turn."
        checkWinnerOne()
        checkWinnerTwo()
        checkForTie()
        return player = "playerTwo"
    } else if (player === "playerTwo") {
        document.querySelector('#button8').innerHTML = " O "
        playerTwoChoice.push(8)
        buttonEight.removeEventListener('click', buttonEightClick)
        document.querySelector('#playerUp').innerHTML = "Player X's turn."
        checkWinnerOne()
        checkWinnerTwo()
        checkForTie()
        return player = "playerOne"
    }
}









function buttonNineClick(){
    timerReset()
    //console.log("button 9 clicked")
            // computer player addition ----------------------
            if (player === "playerOne" && computerPlayerStatus === 1){
            document.querySelector('#button9').innerHTML = " X ";
            playerOneChoice.push(9)
            buttonNine.removeEventListener('click', buttonNineClick)
            document.querySelector('#playerUp').innerHTML = "Player X's turn."
            checkWinnerOne()
            checkForTie()
                for(j=0;j<computerValueArray.length;j++){
                    if (computerValueArray[j] === 9){
                        computerValueArray.splice(j,1);
                    }
                }
            console.log(computerValueArray)
            computerValue = Math.floor(Math.random() * computerValueArray.length);
            playerTwoChoice.push(computerValueArray[computerValue])
            checkWinnerTwo()
                console.log(playerTwoChoice)
        //-------------------------------
            for (i=0;i<playerTwoChoice.length; i++){
                if (playerTwoChoice.includes(1)){
                document.querySelector('#button1').innerHTML = " O "
                buttonOne.removeEventListener('click', buttonOneClick)
                    for(j=0;j<computerValueArray.length;j++){
                        if (computerValueArray[j] === 1){
                            computerValueArray.splice(j,1);
                        }
                    }
            }  if (playerTwoChoice.includes(2)){
                document.querySelector('#button2').innerHTML = " O "
                buttonTwo.removeEventListener('click', buttonTwoClick)
                    for(j=0;j<computerValueArray.length;j++){
                        if (computerValueArray[j] === 2){
                            computerValueArray.splice(j,1);
                        }
                    }
            }  if (playerTwoChoice.includes(3)){
                document.querySelector('#button3').innerHTML = " O "
                buttonThree.removeEventListener('click', buttonThreeClick)
                    for(j=0;j<computerValueArray.length;j++){
                        if (computerValueArray[j] === 3){
                            computerValueArray.splice(j,1);
                        }
                    }
            }  if (playerTwoChoice.includes(4)){
                document.querySelector('#button4').innerHTML = " O "
                buttonFour.removeEventListener('click', buttonFourClick)
                    for(j=0;j<computerValueArray.length;j++){
                        if (computerValueArray[j] === 4){
                            computerValueArray.splice(j,1);
                        }
                    }
            }  if (playerTwoChoice.includes(5)){
                document.querySelector('#button5').innerHTML = " O "
                buttonFive.removeEventListener('click', buttonFiveClick)
                    for(j=0;j<computerValueArray.length;j++){
                        if (computerValueArray[j] === 5){
                            computerValueArray.splice(j,1);
                        }
                    }
            }  if (playerTwoChoice.includes(6)){
                document.querySelector('#button6').innerHTML = " O "
                buttonSix.removeEventListener('click', buttonSixClick)
                    for(j=0;j<computerValueArray.length;j++){
                        if (computerValueArray[j] === 6){
                            computerValueArray.splice(j,1);
                        }
                    }
            }  if (playerTwoChoice.includes(7)){
                document.querySelector('#button7').innerHTML = " O "
                buttonSeven.removeEventListener('click', buttonSevenClick)
                    for(j=0;j<computerValueArray.length;j++){
                        if (computerValueArray[j] === 7){
                            computerValueArray.splice(j,1);
                        }
                    }
            }  if (playerTwoChoice.includes(8)){
                document.querySelector('#button8').innerHTML = " O "
                buttonEight.removeEventListener('click', buttonEightClick)
                    for(j=0;j<computerValueArray.length;j++){
                        if (computerValueArray[j] === 8){
                            computerValueArray.splice(j,1);
                        }
                    }
            }}
            console.log(computerValueArray)
        
        
            
            return player = "playerOne"
        }
        // -----------------------------------------------
    if (player === "playerOne" && computerPlayerStatus === 0) {
        document.querySelector('#button9').innerHTML = " X "
        //document.querySelector('#button9').style.color = "red";
        playerOneChoice.push(9)
        buttonNine.removeEventListener('click', buttonNineClick)
        document.querySelector('#playerUp').innerHTML = "Player O's turn."
        checkWinnerOne()
        checkWinnerTwo()
        checkForTie()
        return player = "playerTwo"
    } else if (player === "playerTwo") {
        document.querySelector('#button9').innerHTML = " O "
        playerTwoChoice.push(9)
        buttonNine.removeEventListener('click', buttonNineClick)
        document.querySelector('#playerUp').innerHTML = "Player X's turn."
        checkWinnerOne()
        checkWinnerTwo()
        checkForTie()
        return player = "playerOne"
    }
}








function buttonResetClick(){
    resetTimerReset ()
    //console.log("reset button clicked")
    document.querySelector('#playerUp').innerHTML = "Player X goes first!"
    buttonOne.addEventListener('click', buttonOneClick)
    buttonTwo.addEventListener('click', buttonTwoClick)
    buttonThree.addEventListener('click', buttonThreeClick)
    buttonFour.addEventListener('click', buttonFourClick)
    buttonFive.addEventListener('click', buttonFiveClick)
    buttonSix.addEventListener('click', buttonSixClick)
    buttonSeven.addEventListener('click', buttonSevenClick)
    buttonEight.addEventListener('click', buttonEightClick)
    buttonNine.addEventListener('click', buttonNineClick)
    buttonReset.addEventListener('click', buttonResetClick)
    document.querySelector('#button1').innerHTML = "&nbsp;"
    document.querySelector('#button2').innerHTML = "&nbsp;"
    document.querySelector('#button3').innerHTML = "&nbsp;"
    document.querySelector('#button4').innerHTML = "&nbsp;"
    document.querySelector('#button5').innerHTML = "&nbsp;"
    document.querySelector('#button6').innerHTML = "&nbsp;"
    document.querySelector('#button7').innerHTML = "&nbsp;"
    document.querySelector('#button8').innerHTML = "&nbsp;"
    document.querySelector('#button9').innerHTML = "&nbsp;"
    // document.querySelector('#button1').style.color = ""
    // document.querySelector('#button2').style.color = ""
    // document.querySelector('#button3').style.color = ""
    // document.querySelector('#button4').style.color = ""
    // document.querySelector('#button5').style.color = ""
    // document.querySelector('#button6').style.color = ""
    // document.querySelector('#button7').style.color = ""
    // document.querySelector('#button8').style.color = ""
    // document.querySelector('#button9').style.color = ""
    resetTieFlag()
    computerValueArray = [1,2,3,4,5,6,7,8,9]
    playerOneChoice = []
    playerTwoChoice = []
    playerTwoComputerChoice = []
    computerPlayerStatus = 0;
    document.querySelector('#computerPlayerId').style.background = '';
    return player = "playerOne"
}

function resetTieFlag(){
    return tieFlag = 0
}


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

let tieFlag = 0
function checkForTie (){
 if (playerOneChoice.length === 5 && tieFlag === 0){
    document.querySelector('#playerUp').innerHTML = "It's a DRAW!"
 } else if (playerTwoChoice.length === 5 && tieFlag === 0){
    document.querySelector('#playerUp').innerHTML = "It's a DRAW!"
 }
}

function playerOneWins(){
    resetTimerReset()
    console.log(playerOneChoice)
    document.querySelector('#playerUp').innerHTML = "PLAYER X WINS!"
    buttonOne.removeEventListener('click', buttonOneClick)
    buttonTwo.removeEventListener('click', buttonTwoClick)
    buttonThree.removeEventListener('click', buttonThreeClick)
    buttonFour.removeEventListener('click', buttonFourClick)
    buttonFive.removeEventListener('click', buttonFiveClick)
    buttonSix.removeEventListener('click', buttonSixClick)
    buttonSeven.removeEventListener('click', buttonSevenClick)
    buttonEight.removeEventListener('click', buttonEightClick)
    buttonNine.removeEventListener('click', buttonNineClick)
    playerOneScore()
    return tieFlag = 1;
}

function playerTwoWins(){
    resetTimerReset()
    console.log(playerTwoChoice)
    document.querySelector('#playerUp').innerHTML = "PLAYER O WINS!"
    buttonOne.removeEventListener('click', buttonOneClick)
    buttonTwo.removeEventListener('click', buttonTwoClick)
    buttonThree.removeEventListener('click', buttonThreeClick)
    buttonFour.removeEventListener('click', buttonFourClick)
    buttonFive.removeEventListener('click', buttonFiveClick)
    buttonSix.removeEventListener('click', buttonSixClick)
    buttonSeven.removeEventListener('click', buttonSevenClick)
    buttonEight.removeEventListener('click', buttonEightClick)
    buttonNine.removeEventListener('click', buttonNineClick)
    playerTwoScore()
    return tieFlag = 1;
}

scorePlayerOne = 0
scorePlayerTwo = 0

function playerOneScore(){
    document.querySelector('#scoreX').innerHTML = "Player X's Score: " + (scorePlayerOne + 1)
    return scorePlayerOne = scorePlayerOne + 1
}

function playerTwoScore(){
    document.querySelector('#scoreO').innerHTML = "Player O's Score: " + (scorePlayerTwo + 1)
    return scorePlayerTwo = scorePlayerTwo + 1
    }






//    start.addEventListener('click', timerFunction)
//    end.addEventListener('click', endTimerFunction)

//    function timerFunction(){
//         sec = 10
//         timer = setInterval( () => {
//     document.querySelector('#Id').innerHTML = '00:' + sec;
//     sec--;
//         if (sec < 0){
//         clearInterval(timer)
//      } 
//          if (endTimerClickFunction){
//         clearInterval(timer)
//     }
//    }, 1000)

//    }


// function endTimerFunction(){
//        endTimerOnClickFunction()
// }


///////// mini-max algorithm


// function checkWinnerOneMiniMax(){

//     if (playerOneChoice.includes(1) && playerOneChoice.includes(2) && playerOneChoice.includes(3)){
//         return true;
//     } else if (playerOneChoice.includes(4) && playerOneChoice.includes(5) && playerOneChoice.includes(6)){
//         return true;
//     } else if (playerOneChoice.includes(7) && playerOneChoice.includes(8) && playerOneChoice.includes(9)){
//         return true;
//     } else if (playerOneChoice.includes(1) && playerOneChoice.includes(4) && playerOneChoice.includes(7)){  
//         return true;
//     } else if (playerOneChoice.includes(2) && playerOneChoice.includes(5) && playerOneChoice.includes(8)){
//         return true;
//     } else if (playerOneChoice.includes(3) && playerOneChoice.includes(6) && playerOneChoice.includes(9)){ 
//         return true;
//     } else if (playerOneChoice.includes(1) && playerOneChoice.includes(5) && playerOneChoice.includes(9)){          
//         return true;
//     } else if (playerOneChoice.includes(3) && playerOneChoice.includes(5) && playerOneChoice.includes(7)){   
//         return true;
//     } else { 
//         return false;
            
//     }
// }

// function checkWinnerTwoMiniMax(){
//     if (playerTwoChoice.includes(1) && playerTwoChoice.includes(2) && playerTwoChoice.includes(3)){
//         return true;
//     } else if (playerTwoChoice.includes(4) && playerTwoChoice.includes(5) && playerTwoChoice.includes(6)){
//         return true;
//     } else if (playerTwoChoice.includes(7) && playerTwoChoice.includes(8) && playerTwoChoice.includes(9)){
//         return true;
//     } else if (playerTwoChoice.includes(1) && playerTwoChoice.includes(4) && playerTwoChoice.includes(7)){
//         return true;
//     } else if (playerTwoChoice.includes(2) && playerTwoChoice.includes(5) && playerTwoChoice.includes(8)){
//         return true;
//     } else if (playerTwoChoice.includes(3) && playerTwoChoice.includes(6) && playerTwoChoice.includes(9)){
//         return true;
//     } else if (playerTwoChoice.includes(1) && playerTwoChoice.includes(5) && playerTwoChoice.includes(9)){
//         return true;
//     } else if (playerTwoChoice.includes(3) && playerTwoChoice.includes(5) && playerTwoChoice.includes(7)){
//         return true;
//     } else {
//         return false;
        
//     }
// }


// function checkForTieMiniMax (){
//     if (playerOneChoice.length === 5 && tieFlag === 0){
//        return true;
//     } else if (playerTwoChoice.length === 5 && tieFlag === 0){
//        return true;
//     } else {
//         return false;
//     }
//    }
   

// let score = -Infinity

// function miniMax(){

//     if (checkWinnerOneMiniMax()) {
//         return score = -1;
//     } 
//     else if (checkWinnerTwoMiniMax()){
//         return score = 1;
//     } 
//     else if (checkForTieMiniMax()){
//         return score = 0;
//     }

// console.log(score)
// }


function compPlayerDelayButtonOne(){
let delay = setInterval( () => {
        console.log("comp delay")
        for(j=0;j<computerValueArray.length;j++){
            if (computerValueArray[j] === 1){
                computerValueArray.splice(j,1);
            }
        }
        console.log(computerValueArray + " whats left on the board")
    computerValue = Math.floor(Math.random() * computerValueArray.length);
    playerTwoChoice.push(computerValueArray[computerValue])
    checkWinnerTwo()
        console.log(playerTwoChoice + " the computers choice")
        for (i=0;i<playerTwoChoice.length; i++){
               if (playerTwoChoice.includes(2)){
            document.querySelector('#button2').innerHTML = " O "
            buttonTwo.removeEventListener('click', buttonTwoClick)
                for(j=0;j<computerValueArray.length;j++){
                    if (computerValueArray[j] === 2){
                        computerValueArray.splice(j,1);
                    }
                }
        }  if (playerTwoChoice.includes(3)){
            document.querySelector('#button3').innerHTML = " O "
            buttonThree.removeEventListener('click', buttonThreeClick)
                for(j=0;j<computerValueArray.length;j++){
                    if (computerValueArray[j] === 3){
                        computerValueArray.splice(j,1);
                    }
                }
        }  if (playerTwoChoice.includes(4)){
            document.querySelector('#button4').innerHTML = " O "
            buttonFour.removeEventListener('click', buttonFourClick)
                for(j=0;j<computerValueArray.length;j++){
                    if (computerValueArray[j] === 4){
                        computerValueArray.splice(j,1);
                    }
                }
        }  if (playerTwoChoice.includes(5)){
            document.querySelector('#button5').innerHTML = " O "
            buttonFive.removeEventListener('click', buttonFiveClick)
                for(j=0;j<computerValueArray.length;j++){
                    if (computerValueArray[j] === 5){
                        computerValueArray.splice(j,1);
                    }
                }
        }  if (playerTwoChoice.includes(6)){
            document.querySelector('#button6').innerHTML = " O "
            buttonSix.removeEventListener('click', buttonSixClick)
                for(j=0;j<computerValueArray.length;j++){
                    if (computerValueArray[j] === 6){
                        computerValueArray.splice(j,1);
                    }
                }
        }  if (playerTwoChoice.includes(7)){
            document.querySelector('#button7').innerHTML = " O "
            buttonSeven.removeEventListener('click', buttonSevenClick)
                for(j=0;j<computerValueArray.length;j++){
                    if (computerValueArray[j] === 7){
                        computerValueArray.splice(j,1);
                    }
                }
        }  if (playerTwoChoice.includes(8)){
            document.querySelector('#button8').innerHTML = " O "
            buttonEight.removeEventListener('click', buttonEightClick)
                for(j=0;j<computerValueArray.length;j++){
                    if (computerValueArray[j] === 8){
                        computerValueArray.splice(j,1);
                    }
                }
        }  if (playerTwoChoice.includes(9)){
            document.querySelector('#button9').innerHTML = " O "
            buttonNine.removeEventListener('click', buttonNineClick)
                for(j=0;j<computerValueArray.length;j++){
                    if (computerValueArray[j] === 9){
                        computerValueArray.splice(j,1);
                    }
                }
        }}
        return clearInterval(delay)
}, 3000);
}