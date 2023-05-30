// import the express package
const express = require('express')

// create an instance of express
const app = express()

// define the port 
const port = 3000

app.get('/', (request, response) => {
    response.send("Hello students!")
})


// at the end of the file, create the listen method
// to start listening to the requests from the client
app.listen(port, ()=> {
    console.log(`Server running on port ${port}`)
})
