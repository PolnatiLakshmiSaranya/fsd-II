"use strict";
class Shelf {
    item;
    constructor(initialItem) {
        this.item = initialItem;
    }
    getItem() {
        return this.item;
    }
    setItem(newItem) {
        this.item = newItem;
        console.log("Shelf updated successfully.");
    }
}
const bookIdShelf = new Shelf(101);
let bookId = bookIdShelf.getItem();
console.log(`Book ID: ${bookId}`);
bookIdShelf.setItem(202);
const bookNameShelf = new Shelf("The Alchemist");
console.log(`Book Name: ${bookNameShelf.getItem()}`);
const libraryShelf = new Shelf({
    title: "Atomic Habits",
    author: "James Clear"
});
const myBook = libraryShelf.getItem();
console.log(`Title: ${myBook.title}`);
console.log(`Author: ${myBook.author}`);
