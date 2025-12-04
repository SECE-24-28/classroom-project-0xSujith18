// let student={name:"Fank",age:24,course:"MERN",demo:function()
//     {
//     console.log("hello world",this.name);
// }};
// student.demo();

let student=[
    {sna:"Arun",age:20,sma:98},
    {sna:"Jasen",age:21,sma:88},
    {sna:"Kumar",age:22,sma:78},
    {sna:"Ravi",age:23,sma:68},
    {sna:"Ramesh",age:24,sma:58}
]
// console.log(student);
student.forEach(student=>{
    console.log(student.sna+" "+student.sma);
});


let newStudent=student.map(student=>{
    return student.sna+" "+student.sma;
});
console.log(newStudent);

