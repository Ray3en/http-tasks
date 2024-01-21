const express = require("express")
const RegauthController = require('../controllers/regauthController')

const regauthRouter = new express.Router()

regauthRouter.get('/users', RegauthController.users)

module.exports = regauthRouter