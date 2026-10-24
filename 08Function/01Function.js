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
        // console.log("Please enter a number ")
        return
    }
    return `${username} is a man `
}

// console.log(loginUesr("ankit"))
// console.log(loginUesr())


function calculate(...nums) {
    return nums
}



// console.log(calculate(8,54,56))

const user  = {
    username : "ankit",
    price : 23
}





function  handleObject(anyObject){
    // console.log(`username ${anyObject.username} and age is ${anyObject.price}`)
}
// handleObject(user)
handleObject({
    username:"sam",
    price : 14
})





const myNewArry = [100,200,300]

function returnValu (getarray){
    return getarray[1]
}

console.log(returnValu([0 ,1,2,3,4]))