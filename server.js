'use strict'

// imports
const path = require('path')
const express = require('express'),
      app = express()

// require external js
const parser = require('./app/app.js')

// set public directory
app.use(express.static(path.join(__dirname, 'public')))

// use external js
app.use('/', parser)

// start server
var port = process.env.PORT || 3000
var message = 'Server listening on port ' + port + '. . .'
app.listen(port, ()=>{ console.log(message) })
