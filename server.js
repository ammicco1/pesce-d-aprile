const express = require("express");
const server = express();

const port = process.env.PORT || 3000;

server.use(express.static(__dirname));
server.use(express.urlencoded({
    extended: true
}));
server.use(express.json());

server.listen(port, function(){
    console.log("server listen on port: ", port);
});

server.get("/", function(req, res){
    console.log("request: ", req.headers);

    res.sendFile(__dirname + "/views/index.html");
});