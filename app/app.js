'use strict'

const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/whoami', (req, res) => {
    // get data for response
    let userip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
    
    let userlangTemp = req.acceptsLanguages()
    let userlangArr = []
    for (var i = 0; i < userlangTemp.length; i++) {
        if (i%2 !== 0) { userlangArr.push(userlangTemp[i]) }
    }
    let userlang = userlangArr.join(' ')

    let useragentTemp = req.headers['user-agent']
    let useragent = useragentTemp.match(/\((.*?)\)/)[1]

    // create object to send
    let parsed = {
        'IP Address' : userip,
        'Browser Language' : userlang,
        'OS' : useragent
    }

    res.send(parsed)
})

module.exports = router
