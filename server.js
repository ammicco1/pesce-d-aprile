const express = require("express");
const server = express();

const port = process.env.PORT || 3000;
var counter = 0;

server.use(express.static(__dirname));
server.use(express.urlencoded({
    extended: true
}));
server.use(express.json());

server.listen(port, function(){
    console.log("server listen on port: ", port);
});

server.get("/", function(req, res){
    counter++;

    console.log("request: ", req.headers);
    console.log(counter);

    res.sendFile(__dirname + "/views/index.html");
});