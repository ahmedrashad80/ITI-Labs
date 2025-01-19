var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
        console.log("Book \"".concat(book.title, "\" added."));
    };
    Library.prototype.removeBook = function (bookId) {
        this.books = this.books.filter(function (book) { return book.id !== bookId; });
        console.log("Book with ID ".concat(bookId, " removed."));
    };
    Library.prototype.displayBook = function () {
        if (this.books.length === 0) {
            console.log("No books in the library.");
        }
        else {
            console.log("Books in the library:");
            this.books.forEach(function (book) {
                console.log("ID: ".concat(book.id, ", Title: \"").concat(book.title, "\", Author: ").concat(book.author));
            });
        }
    };
    return Library;
}());
var library = new Library();
var book1 = {
    id: 1,
    title: "my noval",
    author: "ahmed",
};
library.addBook(book1);
library.displayBook();
library.removeBook(book1.id);
library.displayBook();
