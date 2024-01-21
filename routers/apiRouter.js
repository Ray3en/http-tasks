const express = require("express")
const ApiController = require('../controllers/apiController')

const apiRouter = new express.Router()

apiRouter.get('/cookies/get', ApiController.cookiesGet)
apiRouter.get('/cookies/auth', ApiController.cookiesAuth)
apiRouter.get('/tokens/auth', ApiController.tokensAuth)
apiRouter.get('/tokens/list', ApiController.tokenList)
apiRouter.get('/tokens/profile', ApiController.tokenProfile)
apiRouter.get('/cors/get_origins', ApiController.corsGetOrigins)

module.exports = apiRouter