let employee =[ {
    ena:"Arun",mob:111
},
{ena:"Balu",mob:222
},
{ena:"Cathy",mob:333
},
{ena:"Dinesh",mob:444
},
{ena:"Eshwar",mob:555
}
];
let newemp=employee.filter((emp)=>
{
    return emp.ena.includes("A")
})
console.log(newemp);