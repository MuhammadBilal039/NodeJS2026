const http = require("http");

const server = http.createServer((req, res)=> {
     res.end("Dukaan create hogai");
})

server.listen()

