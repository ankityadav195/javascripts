//singleton

//object literals
const mySym = Symbol("key1")
const user = {
    name : "ankit",
    [mySym] : "mykey1",
    "game" : "badminton",
    age : 28,
    location : "chhindwara",
    isLogin : false,
    email : "ankittyadav195@gmail.com",
    lastlogin : ["monday", "saturday"]

}

// console.log(mySym)
// console.log(user.name)
// console.log(user.game)
// console.log(user["game"])
// console.log(user["email"])
// console.log( user[mySym])

// Object.freeze(user)
// user.name = "radhe"

// console.log(user.name)


user .greeting = function (){
    console.log("Hello Js")
}
user.greeting2= function (){
    console.log(`Hello Js, ${this.name}`)
}
console.log(user.greeting())
console.log(user.greeting2())
