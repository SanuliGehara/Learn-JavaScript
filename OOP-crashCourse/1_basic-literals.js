const book1 = {
    title: 'Book One',
    author: 'John Doe',
    year: '2013',

    getSummary: function () {
       return `${this.title} was writeten by ${this.author} in ${this.year}`; 
    }
};

const book2 = {
    title: 'Book Two',
    author: 'Jane Doe',
    year: '2016',

    getSummary: function () {
       return `${this.title} was writeten by ${this.author} in ${this.year}`; 
    }
};

console.log(book1.getSummary());
console.log(book2.getSummary());
console.log(Object.values(book1)); // get values of the object
console.log(Object.keys(book1)); // get keys of the object

/** But what if we want to create more books? 
 * Then we need to rewrite the same functions and properties?
 * That's where constructors are used...
 */