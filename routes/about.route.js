const express = require('express')
const router = express.Router()
const aboutController = require('../controllers/about.controller.js')


router.get('/about', aboutController.aboutFunctions)


module.exports = router; 