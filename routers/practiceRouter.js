const express = require("express")
const multer = require('multer')
const PracticeController = require('../controllers/practiceController')

const practiceRouter = new express.Router()

practiceRouter.post('/json-login', PracticeController.jsonLogin)
practiceRouter.post('/fd-login', PracticeController.fdLogin)
practiceRouter.get('/balance', PracticeController.balance)
practiceRouter.get('/cors-proxy', PracticeController.corsProxy)
practiceRouter.get('/any-data', PracticeController.anyData)
practiceRouter.post('/hash-data-mp', multer().none(), PracticeController.hashDataMp)
practiceRouter.post('/hash-data-json', PracticeController.hashDataJson)

module.exports = practiceRouter