var express = require('express');
const { book } = require('../models/book');
const { v4: uuidv4 } = require('uuid');
var router = express.Router();

const bookArray = [ 
  new book(uuidv4(), "Dr Sleep", "Stephen King", 2019,  9781982131807), 
  new book(uuidv4(), "Sapiens: A Brief History of Humankind", "Yuval Noah", 2011, 9780062316097)
];

/* GET books */
router.get('/', function(req, res, next) {
  return res.send(bookArray);
});

/* CREATE book */
router.post('/', function(req, res, next) {
  const payload = req.body;

  if (!payload) {
    return res.status(422).json({ message: 'No body in request.' });
  }

  if (!payload.name || payload.name.trim().length === 0) {
    return res.status(422).json({ message: 'You must provide a name.' });
  }

  if (!payload.author || payload.author.trim().length === 0) {
    return res.status(422).json({ message: 'You must provide an author.' });
  }

  const newBook = new book(uuidv4(), payload.name, payload.author, payload.publishingYear, payload.isbnNumber);
  bookArray.push(newBook);

  return res.status(201).send(newBook);
});

/* UPDATE book */
router.put('/:id', function(req, res, next) {
  const id = req.params.id;
  const payload = req.body;

  const oldBook = bookArray.find(book => book.id === id);

  if (!oldBook) {
    return res.status(404).json({ message: `Book id not found: ${id}` });
  }

  const updatedBook = oldBook;
  if (payload.name) {
    updatedBook.name = payload.name;
  }

  if (payload.author) {
    updatedBook.author = payload.author;
  }

  if (payload.publishingYear) {
    updatedBook.publishingYear = payload.publishingYear;
  }

  if (payload.isbnNumber) {
    updatedBook.isbnNumber = payload.isbnNumber;
  }

  return res.status(200).send(updatedBook);
});

/* DELETE book */
router.delete('/:id', function(req, res, next) {
  const id = req.params.id;
  const index = bookArray.findIndex(book => book.id === id);

  if (index === -1) {
    return res.status(404).json({ message: `Book id not found: ${id}` });
  }

  bookArray.splice(index, 1);
  return res.status(200).json({ message: `Deleted book with id: ${id}` });
});

module.exports = router;
