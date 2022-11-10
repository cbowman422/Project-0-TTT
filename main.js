console.log("welcome")


// Grabbing buttons from index.HTML and storing them in main.JS
buttonOne = document.querySelector('#button1')
buttonTwo = document.querySelector('#button2')
buttonThree = document.querySelector('#button3')
buttonFour = document.querySelector('#button4')
buttonFive = document.querySelector('#button5')
buttonSix = document.querySelector('#button6')
buttonSeven = document.querySelector('#button7')
buttonEight = document.querySelector('#button8')
buttonNine = document.querySelector('#button9')
buttonReset = document.querySelector('#resetButtonId')


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


function buttonOneClick(){
    console.log("button 1 clicked")
    if (player === "playerOne") {
        playerOneChoice.push('1')
        console.log(playerOneChoice + " player 1")
        return player = "playerTwo"
    } else if (player === "playerTwo") {
        playerTwoChoice.push('1')
        console.log(playerTwoChoice + " player 2")
        return player = "playerOne"
    }
}
// functions being called when each button is clicked

function buttonTwoClick(){
    console.log("button 2 clicked")
    if (player === "playerOne") {
        playerOneChoice.push('2')
        console.log(playerOneChoice + " player 1")
        return player = "playerTwo"
    } else if (player === "playerTwo") {
        playerTwoChoice.push('2')
        console.log(playerTwoChoice + " player 2")
        return player = "playerOne"
    }
}

function buttonThreeClick(){
    console.log("button 3 clicked")
    if (player === "playerOne") {
        playerOneChoice.push('3')
        console.log(playerOneChoice + " player 1")
        return player = "playerTwo"
    } else if (player === "playerTwo") {
        playerTwoChoice.push('3')
        console.log(playerTwoChoice + " player 2")
        return player = "playerOne"
    }
}

function buttonFourClick(){
    console.log("button 4 clicked")
    if (player === "playerOne") {
        playerOneChoice.push('4')
        console.log(playerOneChoice + " player 1")
        return player = "playerTwo"
    } else if (player === "playerTwo") {
        playerTwoChoice.push('4')
        console.log(playerTwoChoice + " player 2")
        return player = "playerOne"
    }
}

function buttonFiveClick(){
    console.log("button 5 clicked")
    if (player === "playerOne") {
        playerOneChoice.push('5')
        console.log(playerOneChoice + " player 1")
        return player = "playerTwo"
    } else if (player === "playerTwo") {
        playerTwoChoice.push('5')
        console.log(playerTwoChoice + " player 2")
        return player = "playerOne"
    }
}

function buttonSixClick(){
    console.log("button 6 clicked")
    if (player === "playerOne") {
        playerOneChoice.push('6')
        console.log(playerOneChoice + " player 1")
        return player = "playerTwo"
    } else if (player === "playerTwo") {
        playerTwoChoice.push('6')
        console.log(playerTwoChoice + " player 2")
        return player = "playerOne"
    }
}

function buttonSevenClick(){
    console.log("button 7 clicked")
    if (player === "playerOne") {
        playerOneChoice.push('7')
        console.log(playerOneChoice + " player 1")
        return player = "playerTwo"
    } else if (player === "playerTwo") {
        playerTwoChoice.push('7')
        console.log(playerTwoChoice + " player 2")
        return player = "playerOne"
    }
}

function buttonEightClick(){
    console.log("button 8 clicked")
    if (player === "playerOne") {
        playerOneChoice.push('8')
        console.log(playerOneChoice + " player 1")
        return player = "playerTwo"
    } else if (player === "playerTwo") {
        playerTwoChoice.push('8')
        console.log(playerTwoChoice + " player 2")
        return player = "playerOne"
    }
}

function buttonNineClick(){
    console.log("button 9 clicked")
    if (player === "playerOne") {
        playerOneChoice.push('9')
        console.log(playerOneChoice + " player 1")
        return player = "playerTwo"
    } else if (player === "playerTwo") {
        playerTwoChoice.push('9')
        console.log(playerTwoChoice + " player 2")
        return player = "playerOne"
    }
}

function buttonResetClick(){
    console.log("reset button clicked")
}

