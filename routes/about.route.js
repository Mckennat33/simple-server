const express = require('express')
const router = express.Router()
const aboutController = require('../about.controllers.js')


router.get('/about', aboutController)


module.exports = router; 