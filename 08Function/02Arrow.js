const user = {
    username : "krishna",
    price : 99,
    welcomeMessage : function (){
        // console.log(`${this.username} , welcome to website`)
        // console.log(this)
    }
}
user.welcomeMessage()
user.username = "radhe"
user.welcomeMessage()

console.log(this) //empty return karega

// //
// function chai(){
//     let  username1 = "krishna"
//     console.log(this.username)
// }
// chai()

// const chai  = () => {
//     let  username1 = "krishna"
//     console.log(this)
// }
// chai()
//

 // ++++++++++++++++++++++++ arrow function +++++++++++++++++++++++++++

// const addtwo  =  (num1, num2) => {
//     return num1 + num2
// }


// {} iska  use karega to return  variable likhna karna jaruri hai
// () iska use karega to return karne ka jarurt nhi padegi


// impilesit return
// const addtwo  =  (num1, num2) => num1 + num2
const addtwo  =  (num1, num2) =>( num1 + num2)


console.log(addtwo(4,5)
)
