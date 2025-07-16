import express from "express"
const app = express()
app.listen(8080, ()=>{
    console.log("Server running")
})

app.use(express.static());
app.use("/images", express.static("images"))

app.get("/products", (req,res)=>{
    res.send("Product List")
})
