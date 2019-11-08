'use strict';

const express = require('express');
const app = express();
const port = 9090;

app.use(express.static('public'));

app.use('/',(_,res) => {
    res.sendFile(__dirname+"/public/index.html");
})

app.listen(port, _ => {
    console.log(`app is running at ${port}`)
});