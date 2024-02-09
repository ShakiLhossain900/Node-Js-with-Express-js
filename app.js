// const http = require('http');

const express = require('express');

const app = express(); // running express as a funciton 

// //middlware
// app.use((req, res, next) => {    //next allow kore request next funciton y jaite
//     console.log(' In the middlware');
//     next(); //allow kore next middlware function y jaite 
//     // calling next function middlware to middlware jowa jay
// });

//always run middlware
app.use('/',(req, res, next) => {
    console.log('this always run');
    next();
})

//middlware
app.use('/add-product',(req, res, next) => {
    console.log(' In another middlware');
    res.send('<h1>add "product page" </h1>'); 
    res.send('<form action="/procut" method="POST"><input type="text"><button type="submit>Add product</button></form>')
});

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

//middlware
app.use('/',(req, res, next) => {
    console.log(' In another middlware');
    res.send('<h1>hello from express</h1>') //send response //html content send 
});

// const server = http.createServer(app); // app pass koreci to create server
// server.listen(3000);

app.listen(3000); //http lagbe na listen dile