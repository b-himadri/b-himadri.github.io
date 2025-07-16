// Arrow functions

function greet(){
    console.log("This is a regular function");
}

greet();
const greet = ()=>{
    console.log("This is an arrow function");
}
greet();

// const add = (a,b)=>{
//     return a + b;
// }
const result = add(5, 10);
console.log(result);

const add = (...args)=>{
    console.log(args);
}
