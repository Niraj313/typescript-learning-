"use strict";
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
// type User = {
//     firstName: String;
//     lastName: String;
//     age: number;
// }
// type StringOrNumber = String | Number;
// function printId(id: StringOrNumber) {
//     console.log(id);
// }
// printId(113);
// printId("113");
// -----------------------------Arrays In TS-------------------------------
// function maxValue(arr: number[]) {
//     let max = 0;
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }
// console.log(maxValue([1, 2, 3]));
// -----------------------------Enums--------------------------------------
// enum Direction {
//     Up,
//     Down,
//     Left,
//     Right
// }
// function doSomething(keyPressed: Direction) {
//     if (keyPressed == Direction.Up) {
//     }
// }
// doSomething(Direction.Up);
// doSomething(Direction.Down);
// ---------------------------Generics----------------------------------------
function identity(arg) {
    return arg;
}
let output1 = identity("Niraj");
let output2 = identity(100);
console.log(output1.toUpperCase());
