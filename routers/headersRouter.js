const express = require("express")
const HeadersController = require('../controllers/headersController')

const headersRouter = new express.Router()

headersRouter.get('/referer', HeadersController.referer)
headersRouter.get('/content-type', HeadersController.contentType)
headersRouter.get('/content-length', HeadersController.contentLength)
headersRouter.get('/simple-cache', HeadersController.simpleCache)

module.exports = headersRouter