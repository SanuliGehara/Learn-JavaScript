// Super Class
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary () {
        return `${this.title} was writeten by ${this.author} in ${this.year}`;
    }

    static BookStorName() {
        return `Store Name: Barney & Bunnies`;
    }
}

//SubClass - Magazine
class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);  //call parent constructor 
        this.month = month;
    }
    
    getMonth () {
        return `Published on ${this.month}`;
    }

    static BookStorName() {
        return `Store Name: Bill & Anne`;
    }
}

// Instantite a Object 
const mag1 = new Magazine('Mag One', 'Jane Doe', '2024', 'June');
console.log(mag1);
console.log(mag1.getSummary());
console.log(Magazine.BookStorName());  // static method