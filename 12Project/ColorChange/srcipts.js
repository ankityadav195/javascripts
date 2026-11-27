 const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body") 

buttons.forEach(function (button){
    console.log(button);

    button.addEventListener('mouseenter',function(e){
    //  console.log(e);
    //  console.log(e.target);
     if(e.target.id === 'grey'){
        body.style.backgroundColor = 'pink';
        //  e.target.id
     }


     if(e.target.id === 'white'){
        body.style.backgroundColor = 'red';
     }


     if(e.target.id === 'blue'){
        body.style.backgroundColor = e.target.id;
     }


     if(e.target.id === 'yellow'){
        body.style.backgroundColor = e.target.id;
     }


        })
})





// mouseenter	Mouse element ke andar aate hi	Color change
// mouseover	Mouse element par aate hi; child elements par jaane par bhi trigger ho sakta hai	Hover effect
// mouseleave	Mouse element se bahar jaate hi	Original color wapas
// mouseout	    Mouse element se bahar jaane par; child elements ke beech bhi trigger ho sakta hai	Hover effect remove
// mousedown	Mouse button press karte hi	Press effect
// mouseup	    Mouse button chhodte hi	Release effect
// click	    Mouse se click karne par	Button click
// dblclick	    Double-click karne par	Double-click action
// mousemove	Mouse move karne par	Mouse position track karna
// contextmenu	Right-click karne par	Custom menu











// const buttons = document.querySelectorAll('.button')
// const body = document.querySelector("body")

// buttons.forEach(function (button) {
//    console.log(button)

//    button.addEventListener('mousemove',function(chai){
//       console.log(chai)
//       console.log(chai.target)
//       if (chai.target.id=='grey') {
//          body.style.backgroundColor=chai.target.id
//       }
//       if (chai.target.id=='white') {
//          body.style.backgroundColor=chai.target.id
//       }
//       if (chai.target.id=='blue') {
//          body.style.backgroundColor=chai.target.id
//       }
//       if (chai.target.id=='yellow') {
//          body.style.backgroundColor=chai.target.id
//       }

//    })

// })


