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

module.exports = router;
