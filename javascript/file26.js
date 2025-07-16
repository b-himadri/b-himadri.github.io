//promise

// const f1=()=>{
//     setTimeout(()=>{
//         return 5;
//     },3000)
   
// }

// const f2 = (x)=>{
//     console.log(x+6);
// }

// const n = f1()
// f2(n)


// const f1 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(5);
//             // reject('Error occurred');
//         }, 3000);
//     });
// }

// const f2 = (x) => {
//     console.log(x + 6);
// }   

// f1().then((n) => {
//     f2(n);
// })



//APIs

// fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then((data)=>{
//         data.forEach(value => {
//             console.log(value.name , value.email);
//         });
//       })
//       .catch((err)=> console.log(err))


// const fetchData = () =>{
//     const res = fetch('https://jsonplaceholder.typicode.com/users');
//     const data = res.json();
//     data.forEach((value)=>{
//         console.log(value.name, value.email);
//     })
// }

// fetchData();


