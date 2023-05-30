//import app and port
const {app, port} = require("./server")

// at the end of the file, create the listen method
// to start listening to the requests from the client


app.listen(port, ()=> {
    console.log(`Server running on port ${port}`)
})