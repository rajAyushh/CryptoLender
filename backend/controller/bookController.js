const { Book, validateBook } = require("../models/bookModel");

exports.viewAllBooks = async (req, res, next) => {
  result = await Book.find();
  result.length == 0
    ? next(console.log("No Books were found..."))
    : res.status(200).json(result);
};

exports.viewBookByID = async (req, res, next) => {
  result = await Book.findById({ _id: req.params._id });
  result == null
    ? next(createError.NotFound("No books were found with this ID..."))
    : res.status(200).json(result);
};

exports.addBook = async (req, res, next) => {
  // Validate Schema
  //   const { error } = validateBook(req.body);
  //   if (error) {
  //     console.log("Book details are not in a valid schema: " + error.message);
  //   }
  // Save book
  let book = new Book(req.body);
  //   await book.save((err, result) => {
  //     // If successful, send book
  //     if (err) {
  //       console.log("Unable to save the user profile: " + err.message);
  //     } else {
  //       res.status(201).json(result);
  //     }
  //   });
};
