"use strict";
// --------------Defining a variable in TypeScript-----------------------
// const x: number = 1;
// console.log(x);
function isLegal(user) {
    if (user.age > 18) {
        console.log("Adult");
    }
    else {
        console.log("Not Adult");
    }
}
function greet(user) {
    console.log("hi there " + user.firstName);
}
isLegal({
    firstName: "Niraj",
    lastName: "Gupta",
    age: 20
});
