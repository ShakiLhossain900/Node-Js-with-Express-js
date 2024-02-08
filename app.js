const http = require('http');

const express = require('express');

const app = express(); // running express as a funciton 

const server = http.createServer(app); // app pass koreci to create server

server.listen(3000);