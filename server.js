const { count } = require("console");
const express = require("express");
const server = express();
const fs = require("fs");

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
    update_count(__dirname + "/public/files/count").then(function(){
        res.sendFile(__dirname + "/views/index.html");
    });
});


async function write(path, data){
    fs.writeFile(path, data, function(err){
        if(err){console.log(err);}
    });
}

async function update_count(path){
    fs.readFile(path, 'utf8', function(err, data){
        if(err){console.log(err);}

        var counter = parseInt(data);
        counter++;

        console.log("Counter:", counter);

        write(path, counter + "");
    });
}