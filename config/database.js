const mongoose = require('mongoose')

const setupDB = () => {
    mongoose.connect('mongodb+srv://deepthi:********@cluster0-7uxoi.mongodb.net/Phone-Manager?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => {
        console.log('connected to db')
    })
    .catch((err) => {
        console.log(err)
    })
}

module.exports = setupDB
