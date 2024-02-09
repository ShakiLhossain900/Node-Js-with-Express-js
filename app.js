// const http = require('http');

const express = require('express');

const app = express(); // running express as a funciton 

//middlware
app.use((req, res, next) => {    //next allow kore request next funciton y jaite
    console.log(' In the middlware');
    next(); //allow kore next middlware function y jaite 
    // calling next function middlware to middlware jowa jay
});

//middlware
app.use((req, res, next) => {
    console.log(' In another middlware');
    res.send('<h1>hello from express</h1>') //send response //html content send 
});

// const server = http.createServer(app); // app pass koreci to create server
// server.listen(3000);

app.listen(3000); //http lagbe na listen dile