const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  authors: { type: String, required: true },
  title: { type: String, required: true },
  description: String,
  link: String, 
  image: String
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;