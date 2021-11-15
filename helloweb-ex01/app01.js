const http = require('http');
const PORT = 8088;
const server = http.createServer(function(req, resp){      //핸들러 역할
    resp.writeHead(200, {
        'Content-Type': 'text/html'
    });
    resp.end('<h1>Hello World</h1>');
});

server.listen(PORT, function(){
    console.log(`http server running on${PORT}`);
})