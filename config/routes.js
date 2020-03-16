const contactsController = require('../app/controller/contactsController')
const usersController = require('../app/controller/usersController')
const express = require('express')
const router = express.Router()
const passport = require('passport')

router.get('/contacts', passport.authenticate('jwt', { session : false }), contactsController.list)
router.post('/contacts', passport.authenticate('jwt', { session : false }), contactsController.create)
router.get('/contacts/:id', passport.authenticate('jwt', { session : false }), contactsController.show)
router.put('/contacts/:id', passport.authenticate('jwt', { session : false }), contactsController.update)
router.delete('/contacts/:id', passport.authenticate('jwt', { session : false }), contactsController.delete)

router.post('/register',  passport.authenticate('signup', { session : false }) , usersController.register)
router.post('/login', usersController.login)

module.exports = router