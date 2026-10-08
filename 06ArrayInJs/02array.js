const marval = ["iron man", "thor", "sepider man"]

const  de_hero = ["superman", "flash", "bat man"]

// marval.push(de_hero);
// console.log(marval)
// console.log(marval[1])
// console.log(marval[3][1])
//

 // const  allhero= marval.concat(de_hero)
// console.log(allhero)

// const all_new_hero = [...marval,...de_hero]
// console.log(all_new_hero)
//

const another = [23,42,5,2,4,[43,53,5,25,2,4],24,5,25,2,[34,5,2,5,2,4]]

// console.log(another);
const real = another.flat(Infinity)
// console.log(real)

// console.log(Array.isArray("radhe"))
// console.log(Array.from("radhe"))
// console.log(Array.from({name : "radhe"} ))

let score1 = 100
let score2 = 600
let score3 = 100
let score4 = 400
console.log(Array.of(score1,score2,score3,score4))