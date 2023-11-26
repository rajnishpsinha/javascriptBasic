var http =require('http')
http.createServer(function(req,res){
    //res.writeHead(200,{'Content-Type':'text/html'})
    res.end("Hi how are you!")
}).listen(8080)