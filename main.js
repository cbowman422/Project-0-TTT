console.log("welcome")


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


// maybe try using 1 function for all clicked buttons
//
// function buttonClick(){
//     console.log("button clicked")
// }

// alternate players
let player = "playerOne"
let playerOneChoice = []
let playerTwoChoice = []


// functions being called when each button is clicked
function buttonOneClick(){
    console.log("button 1 clicked")
    if (player === "playerOne") {
        document.querySelector('#button1').innerHTML = " X ";
        document.querySelector('#button1').style.color = "red";
        playerOneChoice.push(1)
        buttonOne.removeEventListener('click', buttonOneClick)
        checkWinnerOne()
        checkWinnerTwo()
        return player = "playerTwo"
    } else if (player === "playerTwo") {
        document.querySelector('#button1').innerHTML = " O "
        playerTwoChoice.push(1)
        buttonOne.removeEventListener('click', buttonOneClick)
        checkWinnerOne()
        checkWinnerTwo()
        return player = "playerOne"
    }
}

function buttonTwoClick(){
    console.log("button 2 clicked")
    if (player === "playerOne") {
        document.querySelector('#button2').innerHTML = " X "
        document.querySelector('#button2').style.color = "red";
        playerOneChoice.push(2)
        buttonTwo.removeEventListener('click', buttonTwoClick)
        checkWinnerOne()
        checkWinnerTwo()
        return player = "playerTwo"
    } else if (player === "playerTwo") {
        document.querySelector('#button2').innerHTML = " O "
        playerTwoChoice.push(2)
        buttonTwo.removeEventListener('click', buttonTwoClick)
        checkWinnerOne()
        checkWinnerTwo()
        return player = "playerOne"
    }
}

function buttonThreeClick(){
    console.log("button 3 clicked")
    if (player === "playerOne") {
        document.querySelector('#button3').innerHTML = " X "
        document.querySelector('#button3').style.color = "red";
        playerOneChoice.push(3)
        buttonThree.removeEventListener('click', buttonThreeClick)
        checkWinnerOne()
        checkWinnerTwo()
        return player = "playerTwo"
    } else if (player === "playerTwo") {
        document.querySelector('#button3').innerHTML = " O "
        playerTwoChoice.push(3)
        buttonThree.removeEventListener('click', buttonThreeClick)
        checkWinnerOne()
        checkWinnerTwo()
        return player = "playerOne"
    }
}

function buttonFourClick(){
    console.log("button 4 clicked")
    if (player === "playerOne") {
        document.querySelector('#button4').innerHTML = " X "
        document.querySelector('#button4').style.color = "red";
        playerOneChoice.push(4)
        buttonFour.removeEventListener('click', buttonFourClick)
        checkWinnerOne()
        checkWinnerTwo()
        return player = "playerTwo"
    } else if (player === "playerTwo") {
        document.querySelector('#button4').innerHTML = " O "
        playerTwoChoice.push(4)
        buttonFour.removeEventListener('click', buttonFourClick)
        checkWinnerOne()
        checkWinnerTwo()
        return player = "playerOne"
    }
}

function buttonFiveClick(){
    console.log("button 5 clicked")
    if (player === "playerOne") {
        document.querySelector('#button5').innerHTML = " X "
        document.querySelector('#button5').style.color = "red";
        playerOneChoice.push(5)
        buttonFive.removeEventListener('click', buttonFiveClick)
        checkWinnerOne()
        checkWinnerTwo()
        return player = "playerTwo"
    } else if (player === "playerTwo") {
        document.querySelector('#button5').innerHTML = " O "
        playerTwoChoice.push(5)
        buttonFive.removeEventListener('click', buttonFiveClick)
        checkWinnerOne()
        checkWinnerTwo()
        return player = "playerOne"
    }
}

function buttonSixClick(){
    console.log("button 6 clicked")
    if (player === "playerOne") {
        document.querySelector('#button6').innerHTML = " X "
        document.querySelector('#button6').style.color = "red";
        playerOneChoice.push(6)
        buttonSix.removeEventListener('click', buttonSixClick)
        checkWinnerOne()
        checkWinnerTwo()
        return player = "playerTwo"
    } else if (player === "playerTwo") {
        document.querySelector('#button6').innerHTML = " O "
        playerTwoChoice.push(6)
        buttonSix.removeEventListener('click', buttonSixClick)
        checkWinnerOne()
        checkWinnerTwo()
        return player = "playerOne"
    }
}

function buttonSevenClick(){
    console.log("button 7 clicked")
    if (player === "playerOne") {
        document.querySelector('#button7').innerHTML = " X "
        document.querySelector('#button7').style.color = "red";
        playerOneChoice.push(7)
        buttonSeven.removeEventListener('click', buttonSevenClick)
        checkWinnerOne()
        checkWinnerTwo()
        return player = "playerTwo"
    } else if (player === "playerTwo") {
        document.querySelector('#button7').innerHTML = " O "
        playerTwoChoice.push(7)
        buttonSeven.removeEventListener('click', buttonSevenClick)
        checkWinnerOne()
        checkWinnerTwo()
        return player = "playerOne"
    }
}

function buttonEightClick(){
    console.log("button 8 clicked")
    if (player === "playerOne") {
        document.querySelector('#button8').innerHTML = " X "
        document.querySelector('#button8').style.color = "red";
        playerOneChoice.push(8)
        buttonEight.removeEventListener('click', buttonEightClick)
        checkWinnerOne()
        checkWinnerTwo()
        return player = "playerTwo"
    } else if (player === "playerTwo") {
        document.querySelector('#button8').innerHTML = " O "
        playerTwoChoice.push(8)
        buttonEight.removeEventListener('click', buttonEightClick)
        checkWinnerOne()
        checkWinnerTwo()
        return player = "playerOne"
    }
}

function buttonNineClick(){
    console.log("button 9 clicked")
    if (player === "playerOne") {
        document.querySelector('#button9').innerHTML = " X "
        document.querySelector('#button9').style.color = "red";
        playerOneChoice.push(9)
        buttonNine.removeEventListener('click', buttonNineClick)
        checkWinnerOne()
        checkWinnerTwo()
        return player = "playerTwo"
    } else if (player === "playerTwo") {
        document.querySelector('#button9').innerHTML = " O "
        playerTwoChoice.push(9)
        buttonNine.removeEventListener('click', buttonNineClick)
        checkWinnerOne()
        checkWinnerTwo()
        return player = "playerOne"
    }
}

function buttonResetClick(){
    console.log("reset button clicked")
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
    playerOneChoice = [];
    playerTwoChoice = [];
    document.querySelector('#button1').innerHTML = ""
    document.querySelector('#button2').innerHTML = ""
    document.querySelector('#button3').innerHTML = ""
    document.querySelector('#button4').innerHTML = ""
    document.querySelector('#button5').innerHTML = ""
    document.querySelector('#button6').innerHTML = ""
    document.querySelector('#button7').innerHTML = ""
    document.querySelector('#button8').innerHTML = ""
    document.querySelector('#button9').innerHTML = ""
    document.querySelector('#button1').style.color = ""
    document.querySelector('#button2').style.color = ""
    document.querySelector('#button3').style.color = ""
    document.querySelector('#button4').style.color = ""
    document.querySelector('#button5').style.color = ""
    document.querySelector('#button6').style.color = ""
    document.querySelector('#button7').style.color = ""
    document.querySelector('#button8').style.color = ""
    document.querySelector('#button9').style.color = ""
    return player = "playerOne"
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

let winner = ""

function playerOneWins(){
    winner = "playerTwoWinner"
    console.log(playerOneChoice)
    console.log("player 1 wins!")
    buttonOne.removeEventListener('click', buttonOneClick)
    buttonTwo.removeEventListener('click', buttonTwoClick)
    buttonThree.removeEventListener('click', buttonThreeClick)
    buttonFour.removeEventListener('click', buttonFourClick)
    buttonFive.removeEventListener('click', buttonFiveClick)
    buttonSix.removeEventListener('click', buttonSixClick)
    buttonSeven.removeEventListener('click', buttonSevenClick)
    buttonEight.removeEventListener('click', buttonEightClick)
    buttonNine.removeEventListener('click', buttonNineClick)
}

function playerTwoWins(){
    winner = "playerTwoWinner"
    console.log(playerTwoChoice)
    console.log("player 2 wins!!")
    buttonOne.removeEventListener('click', buttonNineClick)
    buttonTwo.removeEventListener('click', buttonNineClick)
    buttonThree.removeEventListener('click', buttonNineClick)
    buttonFour.removeEventListener('click', buttonNineClick)
    buttonFive.removeEventListener('click', buttonNineClick)
    buttonSix.removeEventListener('click', buttonNineClick)
    buttonSeven.removeEventListener('click', buttonNineClick)
    buttonEight.removeEventListener('click', buttonNineClick)
    buttonNine.removeEventListener('click', buttonNineClick)
}

