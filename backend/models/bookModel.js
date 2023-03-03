const mongoose = require('mongoose')
const Joi = require('joi')

const bookSchema = mongoose.Schema(
    {
        _id:{
            type:mongoose.Schema.Types.ObjectId
        },
        author: {
            type: mongoose.Schema.Types.String
        },
        name: {
            type: mongoose.Schema.Types.String
        }
    },
    {timestamps : true}
)

const Book = mongoose.model('Book', bookSchema)

function validateBook(book) {
    const schema = Joi.object({
      author: Joi.string(),
      name: Joi.name(),
      bookId: Joi.any()
    }).options({ abortEarly: false })
    return schema.validate(book)
}
  
module.exports = { Book, validateBook }
  