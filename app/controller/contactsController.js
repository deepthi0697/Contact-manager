const Contact = require('../models/contact')

module.exports.list = (req,res) => {
    Contact.find()
    .then((contact) => {
        if(contact){
            res.json(contact)
        } else {
            res.json({})
        }
    })
    .catch((err) => {
        res.json(err)
    })
}

module.exports.create = (req, res) => {
    const body = req.body
    const contact = new Contact(body)
    contact.save()
    .then((contact) => {
        if(contact){
            res.json(contact, {Note: "contact has been saved"})
        } else {
            res.json({})
        }
    })
    .catch((err) => {
        res.json(err)
    })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Contact.findById(id)
    .then((contact) => {
        if(contact){
            res.json(contact)
        } else {
            res.json({})
        }
    })
    .catch((err) => {
        res.json(err)
    })
}

module.exports.update = (req,res) => {
    const id = req.params.id
    const body = req.body
    Contact.findByIdAndUpdate(id, body ,{new: true, runValidators: true})
    .then((contact) => {
        if(contact){
            res.json(contact)
        } else {
            res.json({})
        }
    })
    .catch((err) => {
        res.json(err)
    })
}

module.exports.delete = (req, res) => {
    const id = req.params.id
    Contact.findByIdAndDelete(id)
    .then((contact) => {
        if(contact){
            res.json(contact)
        } else {
            res.json({})
        }
    })
    .catch((err) => {
        res.json(err)
    })
}