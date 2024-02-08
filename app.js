const http = require('http');

const express = require('express');

const app = express(); // running express as a funciton 

const server = http.createServer();

server.listen(3000);