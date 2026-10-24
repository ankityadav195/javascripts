// date

 let  mydate = new Date()
// console.log(mydate)
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toISOString())
// console.log(mydate.toJSON())
// console.log(mydate.toLocaleDateString())
// console.log(mydate.toLocaleTimeString())
// // console.log(mydate.toTemporalInstant())
// console.log(mydate.toTimeString())
// console.log(mydate.getTimezoneOffset())
// console.log(typeof mydate)

// let myCreatedDate = new Date(2023,0,23)

// let myCreatedDate = new Date(2023,0,23 ,11)
let myCreatedDate = new Date("02-10-2026")


// console.log(myCreatedDate.toLocaleString())


// let myTimeStamp = Date.now()
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/100))

let newDate = new Date()
console.log(newDate.getDay())

// `${newDate.getDay()} this is a day or 08`

newDate.toLocaleString('default',{
    weekday : "long"
})