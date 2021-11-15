const connect = require('connect');
const serveStatic = require('serve-static');
const connectRoute = require('connect-route');

const port = 8080;
const app = connect();


app.use(serveStatic(__dirname+"/public"));
app.use(connectRoute(function(router){
    router.get("/", function(req, resp){    //get 방식으로 들어오면 이거
        resp.writeHead(200,{
        'Content-Type':'text/html'
        });
    resp.end('<h1>Main</h1>');
    });

    router.get("/user", function(req, resp){    //get 방식으로 들어오면 이거
        console.log(req._parsedUrl.query);

        req.query = {};
        params = (req._parsedUrl.query||'').split('&');
        params.forEach(element => {
            tokens = params.split('=');
            req.query[tokens[0]]=tokens[1];
        });

        resp.writeHead(200,{
            'Content-Type':'text/html'

        });
        resp.end(`<h1>User No : ${req.query.no}</h1>`);
    });
    router.get("/board", function(req, resp){    //get 방식으로 들어오면 이거
        console.log(req._parsedUrl.query);

        resp.writeHead(200,{
            'Content-Type':'text/html'

        })
        resp.end('<h1>board</h1>');
    });
    router.get("/board/:no", function(req, resp){    //get 방식으로 들어오면 이거
        resp.writeHead(200,{
            'Content-Type':'text/html'
        });
        resp.end(`<h1>board view : ${req.params.no}</h1>`);
    });
    router.get("/guestbook", function(req, resp){    //get 방식으로 들어오면 이거
        console.log(req._parsedUrl.query);

        resp.writeHead(200,{
            'Content-Type':'text/html'

        })
        resp.end('<h1>Guestbook</h1>');
    });
}));

app.listen(port, function(){
    console.log(`http server running on ${port}`)
});