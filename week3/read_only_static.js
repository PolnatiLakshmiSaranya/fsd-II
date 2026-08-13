"use strict";
class Library {
    static libraryName = "City Central Library";
    static totalBooksIssued = 0;
    bookId;
    bookTitle;
    constructor(title, id) {
        this.bookTitle = title;
        this.bookId = id;
        Library.totalBooksIssued++;
    }
    static libraryInfo() {
        console.log(`Welcome to ${Library.libraryName}`);
        console.log("Please return books before the due date to avoid fines.");
    }
    showBook() {
        console.log(`Book Title: ${this.bookTitle}`);
        console.log(`Book ID: ${this.bookId}`);
    }
}
console.log(Library.libraryName);
Library.libraryInfo();
const book1 = new Library("The Vampire Chronicles", "B-01");
const book2 = new Library("India: A History", "B-22");
book1.showBook();
book2.showBook();
console.log(book1.bookId);
console.log(`Total Books Issued: ${Library.totalBooksIssued}`);
