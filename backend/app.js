const port = 8080

const express = require('express')
const cors = require('cors')

const connectDB = require('./db')

console.log("Connecting to DB...")
connectDB()

const app = express()
app.use(cors())
app.use(express.json())

app.use('/', require('./start/router'))

const server = app.listen(port, () => {
    console.log(`App is now running on port ${port}...`)
})

module.exports = server