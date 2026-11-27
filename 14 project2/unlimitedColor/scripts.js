
//  yeh color lekar aayeggaa
const randomColor = function () {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]

    }
    return color
}



// yeh color start click karne pe change hoga
let helptochange 
const startChaningInColor = function () {
      helptochange = setInterval(changeBgColor, 1000)
    function changeBgColor() {
        document.body.style.backgroundColor = randomColor()
    }
}

// yeh color stop click karne pe band hoga

const stopChaningInColor = function () {
    clearInterval(helptochange)
}
helptochange = null

document.querySelector('#start').addEventListener('click', startChaningInColor)
document.querySelector('#stop').addEventListener('click', stopChaningInColor)
