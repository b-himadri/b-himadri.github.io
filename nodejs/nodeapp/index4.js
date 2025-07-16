// 
import https from 'http';
const server = https.createServer((req,res)=>{
    res.end("request received");
});

const PORT = 8081;

server.listen(PORT, ()=>{
    console.log("Server started");
})