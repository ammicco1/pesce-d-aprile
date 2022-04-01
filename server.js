const express = require("express");
const server = express();

const port = 3000 || process.env.PORT;

server.use(express.static(__dirname));
server.use(express.urlencoded({
    extended: true
}));
server.use(express.json());

server.listen(port, function(){
    console.log("server listen on port: ", port);
});

server.get("/", function(req, res){
    res.sendFile(__dirname + "/views/index.html");
});