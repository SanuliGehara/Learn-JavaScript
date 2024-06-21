// Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// getSummary
Book.prototype.getSummary = function() {
    return `${this.title} was writeten by ${this.author} in ${this.year}`;
};

//Inherit prototype methods of Book
Magazine.prototype = Object.create(Book.prototype);

//Magazine Constructor
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);  //Book constructor

    this.month = month;
}

//Use Magazine constructor
Magazine.prototype.constructor = Magazine;

//Instantiate Magazine Object
const mag1 = new Magazine('Mag One', 'Johnn Doe', '2024', 'June');
console.log(mag1);
