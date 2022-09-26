const { promiseImpl } = require("ejs");
const mongoose = require("mongoose");

let schemaBook = mongoose.Schema({
  _id: String,
  title: String,
  description: String,
  price: Number,
  author: String,
  Image: String,
});

let book = mongoose.model("book", schemaBook);
const url = "mongodb://localhost:27017/bookStore";

exports.getAllBooks = () => {
  return new promiseImpl((resolved, rejected) => {
    mongoose
      .connect(url)
      .then(() => {
        return book.find({});
      })
      .then((books) => {
        mongoose.disconnect();
        resolved(books);
      })
      .catch((err) => rejected(err));
  });
};
exports.getThreeBooks = () => {
  return new promiseImpl((resolved, rejected) => {
    mongoose
      .connect(url)
      .then(() => {
        return book.find({}).limit(3);
      })
      .then((books) => {
        mongoose.disconnect();
        resolved(books);
      })
      .catch((err) => rejected(err));
  });
};
exports.getDetails = (id) => {
  return new promiseImpl((resolved, rejected) => {
    mongoose
      .connect(url)
      .then(() => {
        return book.findById(id);
      })
      .then((books) => {
        mongoose.disconnect();
        resolved(books);
      })
      .catch((err) => rejected(err));
  });
};
