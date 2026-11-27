let ramdoms = parseInt(Math.random() * 100 + 1)
const submit = document.querySelector('#subt')
const uservalue = document.querySelector(parseInt('#guessfield').value)
const guessesvalue = document.querySelector(('.guesses').value)
const lastvalue = document.querySelector(('.lastresult').value)
const LowOrHivalue = document.querySelector(('.lowOrHi').value)
const startOver = document.querySelector(('.resultParas').value)

const p = document.createElement('p')

let prevguess = []
let numguess = 1;

let playgame = true

if (playgame) {
    submit.addEventListener('click', function (chai) {
        chai.preventDefault()
        validguesses(guess)


    })

}

function validguesses(guess) {
    if (guess < 1 || guess > 100 ||  isNaN(guess))
        alert('please enter a vaild number : ')
    if (numguess === 11) {
        displayguess(guess)
        displayguess(`Game Over ${ramdoms}`)
        endgame();
    }
    else {
        displayguess(guess)
        checkgusess(guess)
    }
    prevguess.push(guess)
}

function checkgusess(guess) {
    if (guess === ramdoms) {
        display('You guessed it right')
        endgame();
    }
    if (guess < ramdoms) {
        displayguess('number is tooo lowwwww')
    }
    if (guess > ramdoms) {
        displayguess('Number is too high')
    }

}
function display(message) {
    LowOrHivalue.innerHTML = `<h2>${message}</h2>`
}
function displayguess(guess) {
     uservalue.value = " "
    guessesvalue.innerHTML +=`${guess}  `
    numguess++
    lastvalue.innerHTML= `${11-numguess}`

}
function endgame() {
    uservalue.value = " "
    uservalue.setAttribute('disabled',' ')
    p.classList.add('button')
    p.innerHTML = <h2 id="newGame"> Start new game</h2>
    startOver.appendChild(p)
    playgame = false;
    newgame()


}
function newgame() {
 document.querySelector('#newgame')
 newgameButton.addEventListener('click',function(chai){
     ramdoms = parseInt(Math.random() * 100 + 1)
     prevguess = []
     numguess = 1;
     guessesvalue.innerHTML = ' '
     lastvalue.innerHTML = `${11-numguess}`
     uservalue.removeAttribute('disabled')
     startOver.removeChild(p)


    playgame = true
 })
}