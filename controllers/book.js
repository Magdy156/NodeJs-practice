const bookModel = require("../models/book");

exports.bookController = (req, res) => {
  bookModel.getAllBooks().then((books) => {
    res.render("books", { books: books });
  });
};

exports.ThreeBookController = (req, res) => {
  bookModel.getThreeBooks().then((books) => {
    res.render("index", { books: books });
  });
};
