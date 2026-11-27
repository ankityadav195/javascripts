// const sayRam = function () {
//     console.log("heyy ramm")
// }
// setTimeout(sayRam, 2000) // sayRam() se direct excute ho jayega but sayRam se refrence jayega

const changeText = function () {
    console.log(changeText)
    document.querySelector('h1').innerHTML = 'Hey Prabhu'
}
let changeme 

const start = document.querySelector('#start').addEventListener('click',function(){
    changeme = setTimeout(changeText,2000)  
    console.log("startttt")
}) 
//  clearTimeout(changeme)  yeh kuch nhi karega kyu ki settimeOut ke baad yeh lagne se kuch nhi hoga ...





const stop = document.querySelector('#stop').addEventListener('click', function () {
    clearTimeout(changeme)
    console.log("stopppp")
})