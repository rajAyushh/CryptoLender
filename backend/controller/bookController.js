const { Book } = require("../models/bookModel");

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
  let book = new Book(req.body);
  await book
    .save()
    .then((data) => {
      console.log("save data : ", data);
    })
    .then(() => {
      res.status(201).end();
    });
};
