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

// maybe try using 1 function for all clicked buttons
//
// function buttonClick(){
//     console.log("button clicked")
// }

// functions being called when each button is clicked
function buttonOneClick(){
    console.log("button 1 clicked")
}

function buttonTwoClick(){
    console.log("button 2 clicked")
}

function buttonThreeClick(){
    console.log("button 3 clicked")
}

function buttonFourClick(){
    console.log("button 4 clicked")
}

function buttonFiveClick(){
    console.log("button 5 clicked")
}

function buttonSixClick(){
    console.log("button 6 clicked")
}

function buttonSevenClick(){
    console.log("button 7 clicked")
}

function buttonEightClick(){
    console.log("button 8 clicked")
}

function buttonNineClick(){
    console.log("button 9 clicked")
}