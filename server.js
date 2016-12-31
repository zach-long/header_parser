'use strict'

// imports
const express = require('express'),
      app = express()

const parser = require('./parser.js')

// declare server variables
var port = process.env.PORT || 3000
var message = 'Server listening on port ' + port + '. . .'

// set default root response
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index.html')
})

// return header
parser(app)

// start server
app.listen(port, ()=>{ console.log(message) })