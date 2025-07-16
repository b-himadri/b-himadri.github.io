const express = require('express');

const app = express();

app.listen(8080, ()=>{
    console.log("Server started");
})

// app.get('/', (req,res)=>{
//     res.send("Hello World");
// })

// app.get('/products', (req,res)=>{
//     res.json({
//         id: 1,
//         name: "Himadri", 
//         email: "himadri@gmail.com"
//     });
// })

// app.get("/:username", (req,res)=>{
//     res.send(`Good Morning ${req.params.username}`)
// })

// app.get("/name", (req,res)=>{
//     res.send("Good Morning")
// })

// app.get("/name/:name/age/:age", (req,res)=>{

// })

// app.get("/",(req,res)=>{
//     res.send(req.headers.authorization)
// })


//localhost:8080/?name=john&age=21
app.get("/",(req,res)=>{
    res.send(req.query.name)
})

// app.delete , app.patch