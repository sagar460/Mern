//{}
//Scope Chaining => {{{}}}
// if (true){
//     let a=1
//     if(true){
//         let a=5
//         if(true){
//             let a=6
//             console.log(a)
//         }
//     }
// }
// parents block have the access to child while child block doesnt have access.

//lexical scope
// lexical scope is a scope of a parent. [only parent]

// setTimeout
// console.log("a")
// setTimeout(()=>{
//     console.log("this is settimeout")
// }, 1000);
// console.log("b")

// setTimeout Function will execute at last.

// Error  
// let error = new Error("this is Error")
// throw error;

// CALLBACK FUNCTION
// A callback function is a function passsed into another function as an argument.
// let fun1=()=>{};
// let fun2=()=>{};
// let fun3=()=>{};

// fun2(fun1, fun3);
// higher Order Function
// A function which takes argument as function.
// A function which returns another function is called higher Order function.


// JSON.stringify => Converts a javascript value to a javascript object Notation (JSON) String.
// let info = {
//     name: "ram",
//     age: 34,
// location:"ktm",
// }
// let newinfo= JSON.stringify(info)
// console.log(newinfo)

// JSON.Parse() => Converts a javascript Object Notation(JSON) string into an object.

