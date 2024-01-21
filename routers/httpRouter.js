const express = require("express")
const HttpController = require('../controllers/httpController')
const httpRouter = new express.Router()

httpRouter.get('/sample', HttpController.sample)
httpRouter.get('/css', HttpController.css)

module.exports = httpRouter