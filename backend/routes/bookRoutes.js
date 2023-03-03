const express = require('express')
const router = express.Router()
const bookController = require('../controller/bookController')

router.get('/',bookController.viewAllBooks)

module.exports = router