// # primitive 
// String ,  Number , Boolean , null , undefined , Symbol  bigint


const score = 100;
 const scorevalue = 110.4;
 const isLoggin = false 
 const  outside  = false ;
 const userEmail = null;

 const id = Symbol ('123')
 const outsidetemp = Symbol('123')

 console.log(id === outsidetemp);

 const bigNumber= 5649641564641654n
 

//  Refernce || NON Primitive 
 
// Array , Object  , Functiopn 

const heros = ["radha" , "krishna" , "radhe", "krishan"]

let myOnj = {
    name : "ankit",
    age : 33
}
const myFucnction = function(){
    console.log("Radhe Radhe");
    
    
}
console.log(typeof bigNumber);

// ********************************************************
// Statk (primitive ) isme apan ko copy milt hai original value nhi milti hai
// Heap ( non primitive )isme apan ko original vlaue  milt hai 