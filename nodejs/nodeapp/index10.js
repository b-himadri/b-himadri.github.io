import express from 'express'
// const bycrypt = require('bycrypt')
import bycrypt from 'bycrypt'
const app = express()
app.listen(8080, ()=>{
    console.log("Server Started")
})

// const pwd = "pass264"
// const hashedpwd = bycrypt.hash(pwd, 10)
// console.log(hashedpwd);

const check = await bycrypt.compare("pass123", "")
console.log(check);
