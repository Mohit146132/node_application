//import modules
var express = require('express')
var bodyparser = require('body-parser')
var cors = require('cors')

//Create rest object
var app = express()

//set JSON as MIME type
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))

//enable cors
app.use(cors())

//import module
var fetch = require('./fetch/fetch')
var insert = require('./insert/insert')
var update = require('./update/update')
var remove = require('./delete/delete')

//use module
app.use('/fetch',fetch)
app.use('/insert',insert)
app.use('/update',update)
app.use('/delete',remove)

//create a port
let port = process.env.PORT || 8080

//assign port no
app.listen(port,()=>{
    console.log("server listening on", port)
})