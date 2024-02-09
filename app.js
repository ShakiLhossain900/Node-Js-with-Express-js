// const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

const app = express(); // running express as a funciton 
app.use(bodyParser.urlencoded({extended: false}));

// //middlware
// app.use((req, res, next) => {    //next allow kore request next funciton y jaite
//     console.log(' In the middlware');
//     next(); //allow kore next middlware function y jaite 
//     // calling next function middlware to middlware jowa jay
// });

//route handing middlware er age akta thirparty paccage install korte hobe
//   npm install --save body-parser


//middlware
app.use('/add-product',(req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

//middlware
app.use('/',(req, res, next) => {
    res.send('<h1>hello from express</h1>') //send response //html content send 
});

// const server = http.createServer(app); // app pass koreci to create server
// server.listen(3000);

app.listen(3000); //http lagbe na listen dile