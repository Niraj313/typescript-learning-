// --------------Defining a variable in TypeScript-----------------------
// const x: number = 1;
// console.log(x);
 
// function hello(name:String) {
//     console.log(`hello ${name}`);
// }
// hello('Niraj');

// function sum(a:number, b:number):number  {
//     return a + b;
// }
// const value = sum(1, 2);
// console.log(value);

// function isAge(age:number):boolean {
//     if (age > 18) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isAge(18));
// ---------------------Interfaces-----------------------------------
// interface User {
//     firstName: String;
//     lastName: String;
//     age: number;
// }
// function isLegal(user: User) {
//     if (user.age > 18) {
//         console.log("Adult");
//     } else {
//         console.log("Not Adult");
//     }
// }
// function greet(user: User) {
//     console.log("hi there " + user.firstName);
// }
// isLegal({
//     firstName: "Niraj",
//     lastName: "Gupta",
//     age: 20
// });
// ------------------------Types----------------------------------------
type User = {
    firstName: String;
    lastName: String;
    age: number;
}

type StringOrNumber = String | Number;
function printId(id: StringOrNumber) {
    console.log(id);
}  
printId(113);
printId("113");