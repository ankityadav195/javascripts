//   document.getElementById('blue').onclick = function(){
//     alert('Blue car is select')
//   }
// document.getElementById('blue').addEventListener('click', function(){
//      alert('blue is select')
// },false)
//   document.querySelectorAll('#images img').forEach(function (image){
//     image.onclick = function(){
//         alert('Car is select')
//     }

//   })

// document.getElementById('images').addEventListener('click',function(chai){
//     console.log('click inside the ul')
//     chai.stopPropagation()
// },false) // false = that is a bubbling yeh niche se uppper ki or jata hai isme pehle click... the li... ul  or iska ulta true me hota hai vo upper se niche aata hai.. yeh stopPropagation vohi stop kar dega celection ko

// document.getElementById('red').addEventListener('click',function(){
//     console.log('red car is select')
// },false)


// | Property | Use |
// |---|---|
// | `timestamp` | Event trigger hone ke baad kitna time (milliseconds) hua, relative to the event timing origin. |
// | `defaultPrevented` | Check karta hai ki default behaviour prevent hua hai ya nahi (`true`/`false`). |
// | `target` | Batata hai ki event originally kis element par trigger hua. |
// | `toElement` | Non-standard/obsolete property; iske badle `target` ya `relatedTarget` use karo. |
// | `srcElement` | Legacy property; modern browsers mein `target` use karna better hai. |
// | `currentTarget` | Batata hai ki event listener kis element par attached hai. |
// | `clientX` | Mouse ki X position viewport (browser window ke visible area) ke andar. |
// | `clientY` | Mouse ki Y position viewport ke andar. |
// | `screenX` | Screen ke according mouse ki X position. |
// | `screenY` | Screen ke according mouse ki Y position. |
// | `altKey` | Check karta hai ki Alt key pressed thi ya nahi. |
// | `ctrlKey` | Check karta hai ki Ctrl key pressed thi ya nahi. |
// | `shiftKey` | Check karta hai ki Shift key pressed thi ya nahi. |
// | `keyCode` | Key ka numeric code; deprecated hai. Iske badle `event.key` ya `event.code` use karo. |
  

// document.querySelector('#images').addEventListener('click', function(event){

    // console.log('timestamp:', event.timeStamp);
    // console.log('defaultPrevented:', event.defaultPrevented);
    // console.log('target:', event.target);
    // console.log('currentTarget:', event.currentTarget);
    // console.log('clientX:', event.clientX);
    // console.log('clientY:', event.clientY);
    // console.log('screenX:', event.screenX);
    // console.log('screenY:', event.screenY);
    // console.log('altKey:', event.altKey);
    // console.log('ctrlKey:', event.ctrlKey);
    // console.log('shiftKey:', event.shiftKey);
    // console.log('key:', event.key);
    // console.log('code:', event.code);

// });
  



















// document.querySelector('#images').addEventListener('click',function(chai){
//     console.log(chai.target.tagName)
//     if (chai.target.tagName =='IMG') {
//         console.log(chai.target.id)
    
//   let removeIt = chai.target.parentNode
//   removeIt.remove();
//     }
// })



