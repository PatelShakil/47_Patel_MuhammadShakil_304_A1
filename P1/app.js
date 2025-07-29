const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{

    if(req.url === '/gethello'){
        res.end("Hello NodeJs!!");
    }else if(req.url === '/gethtml'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<h1>Hello HTML</h1>");
        res.end();
    } else if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        const html = fs.readFileSync('./static/index.html','utf-8');
        res.write(html);
        res.end();
    }
});


const app = server.listen(8000,()=>{
    console.log("Server listening on port 8000...")
})