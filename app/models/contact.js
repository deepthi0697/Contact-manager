const mongoose = require('mongoose')
const Schema = mongoose.Schema

const contactSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        minlength: 10,
        unique: true
    },
    email: {
        type: String,
        required: true
    }
})

const Contact = mongoose.model('Contact', contactSchema)



module.exports = Contact