const express = require("express")
const PracticeController = require('../controllers/practiceController')

const practiceRouter = new express.Router()

practiceRouter.post('/json-login', PracticeController.jsonLogin) // XHR 1.1
practiceRouter.post('/fd-login', PracticeController.fdLogin) // XHR 1.2
practiceRouter.get('/balance', PracticeController.balance) // XHR 3.2
practiceRouter.get('/cors-proxy', PracticeController.corsProxy) // XHR 5.1
practiceRouter.get('/any-data', PracticeController.anyData) // XHR 6.1, 6.2

module.exports = practiceRouter