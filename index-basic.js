// import the express package
const express = require('express')

// create an instance of express
const app = express()

// define the port 
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (request, response) => {

    response.send(`<h1>Hello students!</h1>`)
})

app.post('/', (request, response) => {
    // getting the content from the body of the request
    const message = request.body.message
    // send it back to the client
    response.send(message)
})

app.delete('/', (request, response) => {
    response.json({"message": "Deleted"})
})


// at the end of the file, create the listen method
// to start listening to the requests from the client
app.listen(port, ()=> {
    console.log(`Server running on port ${port}`)
})
