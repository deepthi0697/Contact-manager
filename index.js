const express = require('express')
const app = express()
const PORT = 3080
const setupDB = require('./config/database')
const routes = require('./config/routes')
const passport = require('passport')
const mongoose = require('mongoose')
const User = require('./app/models/User')
const bodyParser = require('body-parser')
require('./app/middlewares/passportMiddleware')


app.use(express.json())
app.use('/', routes)
mongoose.connection.on('error', error => console.log(error) )

//congiguring passport
app.use(passport.initialize())
app.use(passport.session())

app.use(bodyParser.urlencoded({extended: true}))

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

setupDB()

//Handle errors
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({ error : err });
  });
  

app.listen(PORT, (req, res) => {
    console.log('listening on port ', PORT)
})