const express = require('express')
const { connectToDb, getDb } = require('./db')

const app = express()
let db

// app.listen(8000, () => {
//     console.log("App listening on 8000")
// }) 

connectToDb((err) => {
    if(!err) {
        app.listen(8000, () => {
            console.log("App listening on 8000")
        })   
        db = getDb()
    } else {
        console.log(err)
    }
})

app.get('/books',(req,res)=> {
    let books = []
    db.collection('Books')
    .find()
    .forEach(book => books.push(book))
    .then(() => {
        res.status(200).json(books)
    })
    .catch(() => {
        res.status(500).json({error:'Could Not Fetch'})
    })

    res.json({mssg: "Welcome to the API"})
})