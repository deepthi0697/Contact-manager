const mongoose = require('mongoose')
const Schema = mongoose.Schema
const validator = require('validator')
const passportLocalMongoose = require('passport-local-mongoose')
const bcryptjs = require('bcryptjs')

const userSchema = new Schema({
    
    email: {
        type: String,
        required: true,
        validate: {
            validator: function(value){
                return validator.isEmail(value)
            },
            message: function(){
                return 'invalid email format'
            }
        }

    },
    password: {
        type: String,
        required: true
    }
})

userSchema.plugin(passportLocalMongoose)

//1 - pre hook method
userSchema.pre('save', async function(next){
    const user = this
    const hash = await bcryptjs.hash(this.password, 10)
    this.password = hash
    next()
})

//2 - instance method
userSchema.methods.isValidPassword = async function(password){
    const user  = this
    const result = await bcryptjs.compare(password, user.password)
    return result
}

const User = mongoose.model('User', userSchema)

module.exports = User