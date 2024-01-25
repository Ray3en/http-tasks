const express = require("express")
const ExampleController = require('../controllers/exampleController')

const apiRouter = new express.Router()

apiRouter.get('/random/check-availability', ExampleController.checkAvailability)
apiRouter.get('/random/reserve', ExampleController.reserve)
apiRouter.get('/random/appointment', ExampleController.appointment)
apiRouter.post('/custom-route', ExampleController.customRoute);

module.exports = apiRouter
