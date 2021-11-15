const fs= require('fs');
const http = require('http');
const PORT = 8088;
const server = http.createServer(function(req, resp){      //핸들러 역할
    console.log(req.url);
    if(req.url ==='/'){
        req.url = '/index.html';
    }
    fs.readFile(`${__dirname}/public${req.url}`, function(error, data){
        resp.writeHead(200, {
            'Content-Type': 'text/html'
        });
        resp.end(data);
    });

    
});

server.listen(PORT, function(){
    console.log(`http server running on${PORT}`);
})