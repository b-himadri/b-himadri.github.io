import express from "express"
import jwt from "jsonwebtoken"
import bycrypt from "bycrypt"
const app = express()

const SECRET = "your_secret_key"

const user = [
   { 
    email : "john@gmail.com",
    pass : "1234", 
    roles : "user"
}, 
    {
        email : "mira@gmail.com",
    pass : "5678", 
    roles : "user"

    }
];

app.use(express.json());

app.get("/login", (req,res)=>{
    const {email, pass}= req.body;
    const found = user.find(
        (user)=> user.email ===email && user.pass ===pass
    );
    if(found){
        const token = jwt.sign(found, SECRET, {expiresIn: "1h"});
        res.status(200).json({user: found, token});
    }
    else{
        res.status(403).json({message :"Access Denied"})
    }
})

const authenticate = (req,res, next) =>{

   try{
     const authHeaders = req.headers.authorization;
    const token = authHeaders.split(" ")[1]; 

    const user = jwt.verify(token, SECRET);
    req.role = user.role;
    next()
   }
   catch(err){
        return res.status(400).json({message : "Invalid Token"});
   }
   return res.json(token);
 
}

const authorize = (role) =>{

    return (req, res, next)=>{
        if(req.role!== "admin"){
           return res.status.json({message : "Unauthorized Access"})
        }
         next();
    }
   
}

app.post("/register", async(req,res)=>{
    const [name,email, pass , role] = req.body;
    const hashedpwd = await bycrypt.hash(pass.SECRET);
    const user = {
        name, email, pass :hashedpwd
    }
})

app.get("/users", authenticate, authorize("admin"),  (req,res)=>{
    res.json(users);
})

app.listen(8080, ()=>{
    console.log("Server started");
});