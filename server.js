// import the express package
const express = require('express')

// create an instance of express
const app = express()

// define the port 
const port = 3000

const messageRouter = require('./routes/messages-router')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// /messages prefix is added, all the routes form the messageRouter, start with /messages
app.use("/messages",messageRouter)

module.exports = {app, port}
