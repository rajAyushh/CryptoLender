const { MongoClient } = require('mongodb')

let dbConnection
let uri = `mongodb+srv://ashwin:Atlas0512@cluster0.2z2fuz5.mongodb.net/?retryWrites=true&w=majority`

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect(uri)
        .then((client) => {
            dbConnection = client.db()
            return cb
        })
        .catch(err => {
            console.log(err)
            return cb(err)
        })
    },
    getDb: () => dbConnection
}