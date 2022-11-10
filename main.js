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
        playerOneChoice.push(1)
        console.log(playerOneChoice + " player 1")
        buttonOne.removeEventListener('click', buttonOneClick)
        checkWinnerOne()
        return player = "playerTwo"
    } else if (player === "playerTwo") {
        playerTwoChoice.push(1)
        console.log(playerTwoChoice + " player 2")
        buttonOne.removeEventListener('click', buttonOneClick)
        checkWinnerOne()
        return player = "playerOne"
    }
}

function buttonTwoClick(){
    console.log("button 2 clicked")
    if (player === "playerOne") {
        playerOneChoice.push(2)
        console.log(playerOneChoice + " player 1")
        buttonTwo.removeEventListener('click', buttonTwoClick)
        checkWinnerOne()
        return player = "playerTwo"
    } else if (player === "playerTwo") {
        playerTwoChoice.push(2)
        console.log(playerTwoChoice + " player 2")
        buttonTwo.removeEventListener('click', buttonTwoClick)
        checkWinnerOne()
        return player = "playerOne"
    }
}

function buttonThreeClick(){
    console.log("button 3 clicked")
    if (player === "playerOne") {
        playerOneChoice.push(3)
        console.log(playerOneChoice + " player 1")
        buttonThree.removeEventListener('click', buttonThreeClick)
        checkWinnerOne()
        return player = "playerTwo"
    } else if (player === "playerTwo") {
        playerTwoChoice.push(3)
        console.log(playerTwoChoice + " player 2")
        buttonThree.removeEventListener('click', buttonThreeClick)
        checkWinnerOne()
        return player = "playerOne"
    }
}

function buttonFourClick(){
    console.log("button 4 clicked")
    if (player === "playerOne") {
        playerOneChoice.push(4)
        console.log(playerOneChoice + " player 1")
        buttonFour.removeEventListener('click', buttonFourClick)
        checkWinnerOne()
        return player = "playerTwo"
    } else if (player === "playerTwo") {
        playerTwoChoice.push(4)
        console.log(playerTwoChoice + " player 2")
        buttonFour.removeEventListener('click', buttonFourClick)
        checkWinnerOne()
        return player = "playerOne"
    }
}

function buttonFiveClick(){
    console.log("button 5 clicked")
    if (player === "playerOne") {
        playerOneChoice.push(5)
        console.log(playerOneChoice + " player 1")
        buttonFive.removeEventListener('click', buttonFiveClick)
        checkWinnerOne()
        return player = "playerTwo"
    } else if (player === "playerTwo") {
        playerTwoChoice.push(5)
        console.log(playerTwoChoice + " player 2")
        buttonFive.removeEventListener('click', buttonFiveClick)
        checkWinnerOne()
        return player = "playerOne"
    }
}

function buttonSixClick(){
    console.log("button 6 clicked")
    if (player === "playerOne") {
        playerOneChoice.push(6)
        console.log(playerOneChoice + " player 1")
        buttonSix.removeEventListener('click', buttonSixClick)
        checkWinnerOne()
        return player = "playerTwo"
    } else if (player === "playerTwo") {
        playerTwoChoice.push(6)
        console.log(playerTwoChoice + " player 2")
        buttonSix.removeEventListener('click', buttonSixClick)
        checkWinnerOne()
        return player = "playerOne"
    }
}

function buttonSevenClick(){
    console.log("button 7 clicked")
    if (player === "playerOne") {
        playerOneChoice.push(7)
        console.log(playerOneChoice + " player 1")
        buttonSeven.removeEventListener('click', buttonSevenClick)
        checkWinnerOne()
        return player = "playerTwo"
    } else if (player === "playerTwo") {
        playerTwoChoice.push(7)
        console.log(playerTwoChoice + " player 2")
        buttonSeven.removeEventListener('click', buttonSevenClick)
        checkWinnerOne()
        return player = "playerOne"
    }
}

function buttonEightClick(){
    console.log("button 8 clicked")
    if (player === "playerOne") {
        playerOneChoice.push(8)
        console.log(playerOneChoice + " player 1")
        buttonEight.removeEventListener('click', buttonEightClick)
        checkWinnerOne()
        return player = "playerTwo"
    } else if (player === "playerTwo") {
        playerTwoChoice.push(8)
        console.log(playerTwoChoice + " player 2")
        buttonEight.removeEventListener('click', buttonEightClick)
        checkWinnerOne()
        return player = "playerOne"
    }
}

function buttonNineClick(){
    console.log("button 9 clicked")
    if (player === "playerOne") {
        playerOneChoice.push(9)
        console.log(playerOneChoice + " player 1")
        buttonNine.removeEventListener('click', buttonNineClick)
        checkWinnerOne()
        return player = "playerTwo"
    } else if (player === "playerTwo") {
        playerTwoChoice.push(9)
        console.log(playerTwoChoice + " player 2")
        buttonNine.removeEventListener('click', buttonNineClick)
        checkWinnerOne()
        return player = "playerOne"
    }
}

function buttonResetClick(){
    console.log("reset button clicked")
}


function checkWinnerOne(){
        if (playerOneChoice.includes(1) && playerOneChoice.includes(2) && playerOneChoice.includes(3)){
            console.log("winner!!!")
        } else if (playerOneChoice.includes(4) && playerOneChoice.includes(5) && playerOneChoice.includes(6)){
            console.log("winner!!!")
        } else if (playerOneChoice.includes(7) && playerOneChoice.includes(8) && playerOneChoice.includes(9)){
            console.log("winner!!!")
        } else if (playerOneChoice.includes(1) && playerOneChoice.includes(4) && playerOneChoice.includes(7)){
            console.log("winner!!!")
        } else if (playerOneChoice.includes(1) && playerOneChoice.includes(4) && playerOneChoice.includes(7)){
            console.log("winner!!!")
        } else if (playerOneChoice.includes(2) && playerOneChoice.includes(5) && playerOneChoice.includes(8)){
            console.log("winner!!!")
        } else if (playerOneChoice.includes(3) && playerOneChoice.includes(6) && playerOneChoice.includes(9)){
            console.log("winner!!!")
        } else if (playerOneChoice.includes(1) && playerOneChoice.includes(5) && playerOneChoice.includes(9)){
            console.log("winner!!!")
        } else if (playerOneChoice.includes(2) && playerOneChoice.includes(5) && playerOneChoice.includes(8)){
            console.log("winner!!!")
        } else {
            console.log("not a winner")
        }
}


function checkWinnerTwo(){
    if (playerTwoChoice.includes(1) && playerTwoChoice.includes(2) && playerTwoChoice.includes(3)){
        console.log("winner!!!")
    } else if (playerTwoChoice.includes(4) && playerTwoChoice.includes(5) && playerTwoChoice.includes(6)){
        console.log("winner!!!")
    } else if (playerTwoChoice.includes(7) && playerTwoChoice.includes(8) && playerTwoChoice.includes(9)){
        console.log("winner!!!")
    } else if (playerTwoChoice.includes(1) && playerTwoChoice.includes(4) && playerTwoChoice.includes(7)){
        console.log("winner!!!")
    } else if (playerTwoChoice.includes(1) && playerTwoChoice.includes(4) && playerTwoChoice.includes(7)){
        console.log("winner!!!")
    } else if (playerTwoChoice.includes(2) && playerTwoChoice.includes(5) && playerTwoChoice.includes(8)){
        console.log("winner!!!")
    } else if (playerTwoChoice.includes(3) && playerTwoChoice.includes(6) && playerTwoChoice.includes(9)){
        console.log("winner!!!")
    } else if (playerTwoChoice.includes(1) && playerTwoChoice.includes(5) && playerTwoChoice.includes(9)){
        console.log("winner!!!")
    } else if (playerTwoChoice.includes(2) && playerTwoChoice.includes(5) && playerTwoChoice.includes(8)){
        console.log("winner!!!")
    } else {
        console.log("not a winner")
    }
}