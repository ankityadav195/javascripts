const sayDate = function(str){
    console.log(str,Date.now())}

let changeme
 const start = document.querySelector('#start').addEventListener('click',function(e){
  changeme = setTimeout(sayDate,2000,"hyy")
 })
 const stop = document.querySelector('#stop').addEventListener('click',function(e){
 })


 const intervalId= setInterval(sayDate,3000,"hyyyyy")


