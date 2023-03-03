const allBooks = require('../routes/bookRoutes')

const express = require('express')
const router = express.Router()

// router.use('/',signIn)
router.get('/', (req, res) => {
  res.status(200).send(`Hello World!`)
  console.log("Hello World!!")
})

router.use('/books', allBooks)

module.exports = router