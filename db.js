const mongoose = require('mongoose')

mongoose
    .connect("mongodb+srv://admin:uVoyCIIFcNGmJveF@genesis.oml4p.mongodb.net/Food?retryWrites=true&w=majority", { useNewUrlParser: true })
    .then(()=>{
        console.log('database online')
    })
