const { Book, validateBook } = require('../models/bookModel')

exports.viewAllBooks = async(req,res,next) => {
    console.log(res.body)
    result = await Book.find()
    result.length == 0
    ? next(console.log("No Books were found..."))
    : res.status(200).json(result)
}