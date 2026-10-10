function  sayRadha (){
    console.log("R")
    console.log("A")
    console.log("D")
    console.log("H")
    console.log("A")
    console.log("A")
}
// sayRadha()

// function addnumber (num1 , num2){
//     console.log(num1 + num2 )
// }
function addnumber (num1 , num2){
  // let result = num1+num2
  //   return result
    return num1+num2
}

 const result = addnumber (4,4)
// console.log("Result : ", result)

function loginUesr (username){
    if (!username){
        console.log("Please enter a number ")
        return
    }
    return `${username} is a man `
}

// console.log(loginUesr("ankit"))
console.log(loginUesr())