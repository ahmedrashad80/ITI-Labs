interface Book {
  id: number;
  title: string;
  author: string;
}

class Library {
  books: Array<Book>;

  constructor() {
    this.books = [];
  }
  addBook(book: Book): void {
    this.books.push(book);
    console.log(`Book "${book.title}" added.`);
  }
  removeBook(bookId: number): void {
    this.books = this.books.filter((book) => book.id !== bookId);
    console.log(`Book with ID ${bookId} removed.`);
  }
  displayBook(): void {
    if (this.books.length === 0) {
      console.log("No books in the library.");
    } else {
      console.log("Books in the library:");
      this.books.forEach((book) => {
        console.log(
          `ID: ${book.id}, Title: "${book.title}", Author: ${book.author}`
        );
      });
    }
  }
}

const library = new Library();

const book1: Book = {
  id: 1,
  title: "my noval",
  author: "ahmed",
};

library.addBook(book1);

library.displayBook();

library.removeBook(book1.id);

library.displayBook();
