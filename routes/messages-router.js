//import Express
const express = require('express');
// Create the router instance
const messageRouter = express.Router();

messageRouter.get('/html-greeting', (request, response) => {
    response.send(`<h3>Hello students!</h3>`)
})

messageRouter.post('/repeat-message', (request, response) => {
    // getting the content from the body of the request
    const message = request.body.message
    // send it back to the client
    response.send(message)
})

messageRouter.delete('/delete', (request, response) => {
    response.json({"message": "Deleted"})
})

//export the router
module.exports = messageRouter