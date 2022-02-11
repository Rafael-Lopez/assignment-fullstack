function Book(id, name, author, publishingYear, isbnNumber) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.publishingYear = publishingYear;
    this.isbnNumber = isbnNumber;
}

module.exports.book = Book;