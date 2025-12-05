// console.log("One");
// console.log("Two");
// setInterval(() => {
//     console.log("Three");
// }, 2000);
// console.log("Four");

// console.log("One");
// console.log("Two");
// setTimeout(() => {
//     console.log("Three");
// }, 2000);
// console.log("Four");

console.log("One");
setTimeout(() => {
console.log("Two");
setTimeout(() => {
    console.log("Three");
}, 2000);
}, 2000);

