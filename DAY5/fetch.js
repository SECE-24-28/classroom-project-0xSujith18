// let res = fetch("https://chatgpt.com/");
// console.log(res);

// function demo() {
//     return "India";
// }
// let  x = demo();

let res = fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
 {
    return res.json();
})
.then(user => 
{
    console.log(user);
})
console.log(res)

