const bookModel = require("../models/book");

exports.bookController = (req, res) => {
  bookModel.getAllBooks().then((books) => {
    res.render("books", { books: books, verifUser: req.session.id });
  });
};

exports.ThreeBookController = (req, res) => {
  bookModel.getThreeBooks().then((books) => {
    res.render("index", { books: books, verifUser: req.session.id });
  });
};
exports.idController = (req, res) => {
  let id = req.params.id;
  bookModel.getDetails(id).then((book) => {
    res.render("details", { book: book, verifUser: req.session.id });
  });
};
