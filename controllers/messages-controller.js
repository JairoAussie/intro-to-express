const Message = require ("../models/Message")



//methods that handle the information from the model

function getMessage(){
    const message = new Message("Matin title", "a sentence with the content", "information")
    return message
}

module.exports = getMessage