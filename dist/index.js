"use strict";
// --------------Defining a variable in TypeScript-----------------------
const x = 1;
console.log(x);
function hello(name) {
    console.log(`hello ${name}`);
}
hello('Niraj');
function sum(a, b) {
    return a + b;
}
const value = sum(1, 2);
console.log(value);
function isAge(age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isAge(18));
// --------------
