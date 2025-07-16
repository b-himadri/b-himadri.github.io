// const student = {
//     name: "Devesh",
//     age: 21
// }
// console.log(JSON.stringify(student)); 

const student = '{"name":"Devesh","age":21}';
const parsedStudent = JSON.parse(student);
console.log(parsedStudent);