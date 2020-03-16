//const User = require('../models/User')
const passport = require('passport')
// const passportLocal = require('passport-local')
// const passportMongoose = require('passport-local-mongoose')
const jwt = require('jsonwebtoken')


module.exports.register = async(req, res,next ) => {
    res.json({
        message : 'Signup successful',
        user : req.user
      })
}

module.exports.login = (req, res, next) => {
    passport.authenticate('login', async (err, user, info) => {
        try {
            if(err || !user){
                const error = new Error('An error occurred')
                return next(error)
            }
            req.login(user, {session: false}, async(error) => {
                if(error){
                    return next(error)
                }
                const body = {_id: user._id, email: user.email}
                const token = jwt.sign({user: body}, 'top_secret', {expiresIn: '30min'})
                return res.json({token})
            })
        }
        catch (error){
            return next(error)
        }
    })(req, res, next)
}

