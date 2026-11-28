// const reqUrl= 'https://api.github.com/users/ankityadav195'
// const xhr = new XMLHttpRequest()
// xhr.open('GET',reqUrl)
// xhr.onreadystatechange = function(){
//     console.log(xhr.readyState);
//     if (xhr.readyState==4 ) {
//         const data = JSON.parse(this.responseText)
//         // jab bhi Url se response aata hai vo string me aata hai
//         console.log(typeof data );

//         console.log(data.id);

//     }

// }

// xhr.send()


// API 
const jk = 'https://api.github.com/users/ankityadav195'
const xhr = new XMLHttpRequest();
xhr.open('GET', jk)
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      const data = JSON.parse(this.responseText)
      console.log(data.created_at)
    }
}
xhr.send()