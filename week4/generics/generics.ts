class Shelf<T> {
    private item: T;

    constructor(initialItem: T) {
        this.item = initialItem;
    }

    public getItem(): T {
        return this.item;
    }

    public setItem(newItem: T): void {
        this.item = newItem;
        console.log("Shelf updated successfully.");
    }
}

const bookIdShelf = new Shelf<number>(101);
let bookId = bookIdShelf.getItem();
console.log(`Book ID: ${bookId}`);

bookIdShelf.setItem(202);

const bookNameShelf = new Shelf<string>("The Alchemist");
console.log(`Book Name: ${bookNameShelf.getItem()}`);

interface Book{
    title: string;
    author: string;
}

const libraryShelf = new Shelf<Book>({
    title: "Atomic Habits",
    author: "James Clear"
});

const myBook = libraryShelf.getItem();
console.log(`Title: ${myBook.title}`);
console.log(`Author: ${myBook.author}`);