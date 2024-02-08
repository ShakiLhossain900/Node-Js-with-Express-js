const http = require('http');

const express = require('express');

const app = express(); // running express as a funciton 

app.use((req, res, next) => {
    console.log(' In the middlware');
    next(); //allow kore next middlware function y jaite
});

app.use((req, res, next) => {
    console.log(' In another middlware');

});

const server = http.createServer(app); // app pass koreci to create server

server.listen(3000);