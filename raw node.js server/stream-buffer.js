const http = require('http');
const fs = require("fs");
// createing a sever useing raw node.js

const server = http.createServer();

// listeners
server.on("request", (req, res)=>{
    
    if(req.url === "/read-file" && req.method === "GET");
    
    //streaming file reading
    const readableStream = fs.createReadStream(process.cwd()+'/text/read.txt')
    
    readableStream.on('end', ()=>{
        // res.statusCode = 200;
        res.end("hellow form world");
    })
})

server.listen(5000, ()=>{
    console.log('server is listening from port on 5000');
})
