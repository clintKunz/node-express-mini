// implement your API here
// how to import / export code between files
//introduce how routing works

//import express from 'express'; //ES2015 modules > export default someCode; 
const express = require('express'); //CommonJS modules > module.exports = someCode;
const cors = require('cors'); //this needed to connect from react, yarn add cors

const db = require('./data/db.js');

//build a server with express
const server = express();

server.use(cors());

server.get('/', (req, res) => { //request/route handler
    db.find()
        .then(users => {
        console.log('\n users', users);
        res.json(users);
        })
        .catch(err => res.send(err))
})

//watch for traffic in a particular computer port
//what is a port? http://localhost: 3000 > the 3000 is the port. 
//yarn server - changed package.json
const port = 8000; 
server.listen(port, () => 
console.log(`\n=== API running on port ${port} ===\n`));
