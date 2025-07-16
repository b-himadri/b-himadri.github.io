import express from 'express'
const app = express()

app.listen(8080, ()=>{
    console.log("server started")
})

app.use(express.json())
let products =[];
app.post('/', (req,res)=>{
    // products.push(req.body);
    // res.send("Product Created")
    const {id, name, price} = req.body;
    const found = products.find((product)=> product.id===id);
    if(found) res.send("Product already exists");
    else{
        products.push({
            id,name,price,
        });
        res.status(201).json({message: "Product Created"});
    }
    
})

app.get("/", (req,res)=>{
    res.json(products)
})