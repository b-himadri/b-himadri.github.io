const express = require('express');
const bodyParser = require('body-parser');
const {Pool} = require('pg');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const pool = new Pool({
    user : "postgres",
    host : "localhost",
    password : "Mind@123",
    database: "class_login",
    port : 5432,
})

app.post('/register', async(req , res)=>{

    const {name, email, password} = req.body;

    try{
        await pool.query(
            'INSERT INTO users(name, email, password) VALUES($1, $2, $3)', 
            [name , email , password]
            
        );
        res.status(200).send("Registration successful");
    }
    catch(err){
        console.error(err);
        res.status(500).send('Database error');
    }
});

app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})