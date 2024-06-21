
/**Classes are introduced In ES6 version 
 * Called as 'Syntactic sugar - cause only the syntax is different than ES5'
*/
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary () {
        return `${this.title} was writeten by ${this.author} in ${this.year}`;
    }

    getAge () {
        const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
    }

    // Static method
    static BookStorName() {
        return `Store Name: Barney & Bunnies`;
    }
}

// Instantiate an object
const book1 = new Book('Book One', 'John Doe', '2013');
console.log(book1);
console.log(book1.getSummary());
console.log(Book.BookStorName());