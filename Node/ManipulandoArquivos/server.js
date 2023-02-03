const http = require('http');

const server = http.createServer((req,res)=>{
     
    console.log(req.method)
    console.log(req.url)
    res.statusCode = 404;
    res.end('<h1>Hello World</h1>')

})
// Upando o server
server.listen(3000,()=>{
    console.log('Server Ativo')
})