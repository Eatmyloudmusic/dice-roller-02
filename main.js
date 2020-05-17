let userInput = document.querySelector("#userInput")
let index = 0
let numRolled = 0
let diceArray = []
const diceArray2 = []
let diceRolled = document.querySelector("#diceRolled")
let showEach = document.querySelector("#showEach")
let showRolls = document.querySelector("#showMeRolls")
let showSum = document.querySelector('.showSum')
let reset = document.querySelector('#reset')

rollButton.addEventListener("click", function () {
        console.log(userInput.value.toLowerCase().trim())
    
       while (diceArray.length < userInput.value) {
            let random = Math.floor(Math.random()* 6) + 1
        let last = diceArray.push(random)
        console.log(last)
        console.log(diceArray)
       }
       diceRolled.innerText = "Great! " + userInput.value + " dice rolled!"
})

rollSum.addEventListener("click", function () {
    let diceArray3 = diceArray.slice(userInput)
    var sum = diceArray3.reduce(function(a, b){
        return a + b;
    }, 0); 
    showSum.innerText = sum
    console.log(diceArray3)
})

showRolls.addEventListener("click", function () {
    let set1 = diceArray
    const codeHTML = '<ol>' + set1.reduce((html, item) => {
    return html + "<li>" + item + "</li>";
        }, "") + '</ol>';
    showEach.innerHTML = codeHTML;
    // const s1 = '\u2680'
    // showSum.innerText = s1
})

reset.addEventListener("click", function () {
    showEach.innerHTML = ' '
    userInput.value = ' '
    diceRolled.innerText = ' '
    showSum.innerText = ' '
})
