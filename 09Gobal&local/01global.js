var c= 300
let a = 200;

if(true){
   let  a = 10 ;
    const b =20;
    c = 20
    // console.log("Inner : " , a )
}
// console.log(a)
// console.log(b)
// console.log(c)


function  one () {


    const username = "radhne"


    function  two(){
        const  website = "Krishna"
        console.log(username)

    }
    //   console.log(website);
//       two()

}
one ()

if (true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = "youtube"
        console.log(username+ " " + website)
    }
    // console.log(website)

}
// console.log(username)



//+++++++++++++++++++++++ Interseting +++++++++++++++++++++++++++++++

run(5)

function  run (num){
    return num + 1;



}
//  isme nhi ayaega kyu ki isko kisi me save ni kar rhe hai



addtwo(7)

 const addtwo = function (num){ // isme eror aayega kyu lo tumne function ko ek value (addtwo) me save kar rha ho
     return num + 2

}
