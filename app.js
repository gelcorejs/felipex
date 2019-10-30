const http = require('http');

const server = http.createServer(( req,res )=>{
  res.write("Hola Mundo");
  res.end();
});

server.listen('9000',()=>{
  console.log('server run server run');
})
