// let res = fetch("https://chatgpt.com/");
// console.log(res);

// function demo() {
//     return "India";
// }
// let  x = demo();

// let res = fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
//  {
//     return res.json();
// })
// .then(b => 
// {
//     console.log(b);
// })
// console.log(res)

let fetch_API = async() => {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await res.json();
    console.log(data);
}
fetch_API();

