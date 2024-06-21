// console.log("an")
// filter
// ()=>{}
// filter only returns true or false
// let list = ["a","b","c"]
// let list1 = list.filter((value, index)=> {
//     return true;
// });
// console.log(list1)
// let list = ["a","b","c","d","e"];
// let output = list.filter((value, index)=>{
//     if(value === "e"){
//     return true;
// }
// else{
//     return false;
//     console.log(output)
// };

// let input = [1,2,3,6]
// let output = input.filter((value,index)=>{
//     if(value % 2 === 0){
//         return true;
//     }
// else{
//     return false;
// }});
// console.log(output)

// let list = [1,2,3,4];
// let list1 = list.find((value, index)=>{
// return true;
// })
// console.log(list1);

// let list = ["ram", "",1,0, null, undefined, true, false];
// let output = list.filter(Boolean);
// console.log(output);

// let list = ["ram", "hari", "shyam", "roshan"]
// let output = list.filter((value, index)=>{
//     if (value.length > 4)
//     return true;
// else {
//     return false;
// }
// })
// console.log(output)

// for each
// let list = [1,2,3]
// let output = list.forEach((value, index)=>{
//     console.log(value)
// })

// includes
// let list = [ "ram", "shyam", "Hari",]
// let output = list.includes("ram");
// console.log(output);

// let list = [ 1,2,3,4];
// list.push(5);
// list.pop();
// list.unshift(5);
// list.shift();
// console.log(list)

// push => push value to the last
// pop => remove value from last
// unshift => push value to first
// shift => remove value to first

// sort

// let list = ["d", "r", "t", "k","z", "a", "A"]
// let output = list.sort();
// console.log(output)

// let list = ["anish", "Manish", "jeevan", "rohit", "milan", "milaz", "Z"]
// let output = list.sort()
// console.log(output)


// slice
// let list =[1,2,3,4];
// let newlist = list.slice(3)
// console.log(newlist);


// reduce

 
// let list = [1,2,3,4,5,8,10];
// let newlist = list.filter((value,index)=>{
//         if(value % 2 === 0){
//             return true;
//         }
//     else{
//         return false;
//     }});
   
//     let sum = newlist.reduce((previous,current)=>{
//         return previous + current ;

//     },0)
//     console.log(sum)

// object = set of key and values
// array is a collection of values whereas object is a collection of key value pairs. key value pairs are called properties.
// let info = {
//     name: "ram",
//     age: 23,
//     married: false,
//     location: "chabel",
// }
// console.log(info.age)
// console.log(info.name)
// console.log(info)

// change value
// info.name= "hari"
// info.age= 50
// console.log(info)


// delete
// delete info.married
// console.log(info)

// let data ={
//     name:"name",
//     age:"22",
//     name:"same",
// }
// console.log(data.name)
// let data = {
//     name: "ram",
//     favfruits: ["apple", "banana,"],
// location:{
//     country:"nepal",
//     province: "bagmati",
//     City: "Ktm",
//     street : 2728,
// },
// age: function(){
//     console.log("my name is ram and i am from bagmati");

// },
// }
//  console.log(data.favfruits[0])
//  console.log(data.location.street)
//  data.age();

// alias
// Alias means changing variable names. Once you change variable names you can 


// let {
//     name: fullname,
//     age:year,
//     ismarried,
// }={
//     name:"ram",
//     age:"34",
//     ismarried:false,

// }
// console.log(fullname)




// let info = {
//     name: "tam",
//     surname: "paudel",
//     fullname: function (){
//         console.log(this.name)
//         console.log(this.surname)
//     },
// };
// console.log(info.name);
// info.fullname();


// array destructure

// let planet = ["moon", "sun"];
// // let a = planet[0]
// // let b = planet[1]


// let [a,b,c="venus",]= planet;
// console.log(a,b,c)


// spread Operator => ...
// let planet = [ "sun", "moon", "pluto"]
// let [planet1, ...rest]= planet;
// console.log(planet1)  
// console.log(rest);

// let name = [ "anish", "ram", "hari", "shyam"]
// let data = [ "school", "kathmandu", "nepal"]
// let totaldata= ["this is my data", ...data];
// console.log(totaldata)