// --------------Defining a variable in TypeScript-----------------------
const x: number = 1;
console.log(x);
 
function hello(name:String) {
    console.log(`hello ${name}`);
}
hello('Niraj');

function sum(a:number, b:number):number  {
    return a + b;
}
const value = sum(1, 2);
console.log(value);

function isAge(age:number):boolean {
    if (age > 18) {
        return true;
    } else {
        return false;
    }
}
console.log(isAge(18));
// --------------
