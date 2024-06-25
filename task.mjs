
// get the total  value of array of object price

// let list = [ 
//     {name: "mobile", price: 10000 },
//     {name: "battery", price: 8000},
//     {name: "earphone", price:5000},
//     {name:"charger", price: 2000},]
//     let newlist = list.map((value,index) => {
//             return value.price;
//           });
//           console.log(newlist)
//           let output = newlist.sort();
//           console.log(output);


//    let newlist = list.sort((a,b)=>{    //sort
//         return a.price - b.price;
//     })
//     console.log(newlist);
//    let newlist = list.map((value,index) => {
//     return value.price;
//    });
//    console.log(newlist)
//    let sum = newlist.reduce((a,b) => {
// return a+b;
//    },0)
//    console.log(sum);


// sort the array of object according to price

// let sortlist = newlist.sort((a,b)=>{
// return a-b;
// })
// console.log(sortlist)

// make an arrray function

// if age is 25, console your ticket is free
// if age is 26, console you ticket is 100
// if age is other than 25,26  - console you are not eligible

// let fun = (age)=>{
//     if( age === 25){
//         console.log("your ticket is free")
//     }
//     else if ( age === 26){
//         console.log("your ticket is 100 ")
//     }
//     else{
//        console.log("you are not eligible")}
// }
// let output = fun(26)





// make an array function named sum = num1,num2
// pass 2 input and it must return the sum of num1 and num2 is num3
// here num1, num2, num3 is number and do this by using string lateral

// let fun = (num1, num2)=>{
//     let num3 = `the sum of ${num1} and ${num2} is ${num1+num2}`
// console.log(num3);
// }
// fun(1,2)


// let list = [ "ram", "shyam", "Hari",]
// let output = list.includes("ram");
// console.log(output);

// make an array function
// pass away of fruits
// the funtion must return "the fruits contain apple" if the array  contain apple. ELse return " the fruits does not contain apple"

// let fun = ((fruits)=>{
// if(fruits.includes("apple")){
//     console.log("the fruit contains apple")
// }
// else{
//     console.log("fruit does not contain apple")
// }
// })
// fun(["orange","banana"])


// number sort 
// let list = [1,2,5,8,3,5,6,0]
// let output = list.sort((a,b)=>{
//   return a-b (decending b-a)
// })
// console.log(output)


// length sort
// let list =["anish", "john", "ram", "hari", "javascript"];
// let output = list.sort((a,b)=>{
//   return a.length - b.length;
// })
// console.log(output)

// convert object into Array
// let info = {
//   name: "ram",
//   age: 30,
//   ismarried: false,
// };

// let newArray= Object.keys(info);
// console.log(newArray)

// let valuearray= Object.values(info);
// console.log(valuearray)

// let propertyArray = Object.entries(info);
// console.log(propertyArray)

// convert array into object

// let list = [ [ 'name', 'ram' ], [ 'age', 30 ], [ 'ismarried', false ] ];
// let output = Object.fromEntries(list);
// console.log(output)

// Math
// let data = Math.random() * 100;   // [0,1] default
// console.log(data)
//  let data= Math.ceil(1.23)
//  console.log(data)
// let data = Math.floor(1.23)
// console.log(data)


// scope (BLOCK LEVEL SCOPE)
// {}
// {
//   let a=1;
//   console.log(a);
// }
// console.log(a);
// // A variable will be known within its block for the lie where it is defined.


// { //parent block
//   let a=1
//   { //child block
//     console.log(a)
//   }
//   console.log(a)
// }
// When a variable is called, first it is reached in its own block, if variable is not fouund in that block it will search for its parent block.

// {
//   let a =1
//   {
//     a=10;
//     console.log(a)
//   }
//   console.log(a)
// }
// A variable cannot be redefined in the same block. but we can redefine same variable in different block.


//  == or ===
// console.log("1"==1) // true because == it only checks value
// console.log("1"=== 1) // false because === it checks value and data types

// Nan
// console.log(1+1)
// console.log("a" * "b")

// undefined
// let a;
// console.log(a);
// Undefined means variable is defined but not initialized 

// Rest or spread ...
// let { age, ...rest} = {name:"ram", age:20, ismarried:true}
// console.log(name)
// console.log(rest);

// let sum = (a, ...b) => {
//   console.log(a);
//   console.log(b);
// }
// sum(1,2,3,4,5,5,67,7,8,)

// spread operator
// let arr = [ 1,2,3,4,5];
// let ar1 = [ "ram", "shyam", "john"];
// let output = [2,4, ...ar1, 6,8, ...arr, "java"]
// console.log(output)

// let info = {
//   name: "ram",
//   age: 20,
// Ismarried: true};
// let info1= {...info};
// console.log(info1);
// let info2= { ...info1, "location": "ktm"}
// console.log(info2)


// New task
// let product= [
//   {name: "laptop", price:200000},
//   {name: "mobile", price:10000},
//   {name: "tv", price: 30000},
// ]
// let newarr=product.map((value,index)=>{
//   return value.name;
// })
// console.log(newarr)

// let newarr=product.map((value,index)=>{
//   return value.price
// })
// console.log(newarr)

// let filtarray=product.filter((a)=>{
//   return a.price>60000
// })
// console.log(filtarray)

//  let valueArray=product.map((value)=>{
//  return {[value.name]:value.price}
//  })
//  console.log(valueArray)


  // show a product whose price is greater than 2000
  // 'MacBook Pro cost NRs. 100000 and its category is Laptops',
  // 'Nike cost NRs. 5000 and its category is Running Shoes',
  // 'Dell XPS cost NRs. 120000 and its category is Laptops' 
const products = [
{
  id: 1,
  title: "MacBook Pro",
  category: "Laptops",
  price: 100000.0,
  description: "A high-performance laptop.",
  manufactureDate: "2023-05-15T08:30:00",
  isAvailable: true,
},
{
  id: 2,
  title: "Nike",
  category: "Running Shoes",
  price: 5000,
  description: "Running shoes designed for speed and comfort.",
  manufactureDate: "2023-02-20T14:45:00",
  isAvailable: true,
},
{
  id: 3,
  title: "Python",
  category: "Books",
  price: 500,
  description: "A language for AI",
  manufactureDate: "1925-04-10T10:10:00",
  isAvailable: false,
},
{
  id: 4,
  title: "Javascript",
  category: "Books",
  price: 700,
  description: "A language for Browser",
  manufactureDate: "1995-12-04T12:00:00",
  isAvailable: false,
},
{
  id: 5,
  title: "Dell XPS",
  category: "Laptops",
  price: 120000.0,
  description: "An ultra-slim laptop with powerful performance.",
  manufactureDate: "2023-04-25T09:15:00",
  isAvailable: true,
},
];
hsakjbcjkasbckja
// only use filter and map
let filtArrays=products.filter((a)=>{
  return a.price>2000;
})
console.log(filtArrays);

let newArray=filtArrays.map((value,index)=>{
  return `${value.title} cost ${value.price} and it's catagory is ${value.category} `
})
console.log(newArray)


