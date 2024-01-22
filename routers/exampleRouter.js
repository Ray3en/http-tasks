const express = require("express")
const ExampleController = require('../controllers/exampleController')

const apiRouter = new express.Router()

apiRouter.get('/random/check-availability', ExampleController.checkAvailability)
apiRouter.get('/random/reserve', ExampleController.reserve)
apiRouter.get('/random/appointment', ExampleController.appointment)

module.exports = apiRouter
