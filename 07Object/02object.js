//singleton

// const tinderuser = new Object ()
// console.log(tinderuser)


// Non- singleton
const tinderuser = {}
tinderuser.id = "123abc",
tinderuser.name = "ankit",
tinderuser.isLoggin = false
//
//
// console.log(tinderuser)

// const regularname = {
//     email: " 127t654@gmail.com",
//     fullName: {
//         userName: {
//             name: "ankit",
//             lastname: "yadav"
//         }
//
//     }
// }
// console.log(regularname.fullName.userName.name)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "s", 4: "d"}
// const obj3 = {obj1,obj2}
// console.log(obj1)
// const obj3 =Object.assign({} , obj1,obj2); yeh vala kar lo ya fir iske niche vala karla lo dono ek hi kaam karte hai
const obj3 = {...obj1,...obj2}

// console.log( obj3)

// database se kese aayega yeh

const user = [
    {
        id : 1,
        name : "ankit1",
        email : "q24512$gmail.com"
    },
    {
        id : 1,
        name : "ankit2",
        email : "q24512$gmail.com"
    },
    {
        id : 1,
        name : "ankit3",
        email : "q24512$gmail.com"
    }
]
// console.log(user[0].name)

console.log(tinderuser)
console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))
console.log(tinderuser.hasOwnProperty("isLoggin"))