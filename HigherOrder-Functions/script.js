// Object array
const companies = [
    { name: "Comapny One", category: "Finance", start: 1981, end: 2003 },
    { name: "Comapny Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Comapny Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Comapny Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Comapny Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Comapny Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Comapny Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Comapny Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Comapny Nine", category: "Retail", start: 1981, end: 1989 }
];

// Numbers Array
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// //--------------- for -----------------
// for (let i = 0; i<companies.length; i++) {
//     console.log(companies[i]);
// }

// //--------------- forEach -----------------
// companies.forEach(function (company,index,companies) {    // 1,2 or 3 param
//     console.log(company);
// });

// companies.forEach(company => console.log(company));   // Arrow function

//--------------- filter ----------------
/*** NOTE: cretaes a new array with elements that pass the test in function
** Doesn't change the original array*/

const canDrink = ages.filter(function (age) {  //age,index,ages
    if (age >= 21) {
        return true;
    }
});

// const canDrink = ages.filter(age => (age >= 21));

// filter retail companies
const retailCompanies = companies.filter(company => company.category === 'Retail');

// All the companies from 80 s
const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));

// Get companies lasted more ten 10 yrs or more
const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));
// console.log(lastedTenYears);

//----------------- map ------------------
/*** NOTE: cretaes a new array with elements
** Doesn't change the original array*/

// create array of company names
const companyNames = companies.map(function (company) {
    return company.name;
});

// companies with start to end yrs
const testMap = companies.map(function (company) {
    return `${company.name} [${company.start} - ${company.end}]`;
});

// const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);

// squart of ages
const agesSquareRoot = ages.map(age => Math.sqrt(age));
// two times
const agesTimesTwo = ages.map(age => age * 2);

// sqrt and two times
const ageMap = ages
    .map(age => Math.sqrt(age))
    .map(age => age * 2);

//---------------- sort --------------------
// sort companies by start yr
// const sortedCompanies = companies.sort(function (c1, c2) {
//     if(c1.start > c2.start) {
//         return 1;
//     } else {
//         return -1;
//     }
// });

//const sortedCompanies = companies.sort((a, b) => (a.start > b.start? 1: -1));

// sort by category
//const sortCatergory = companies.sort((a, b) => (a.category> b.category? 1:-1));

// // sort by category - descending order
// const sortCatergory = companies.sort((a, b) => (b.category > a.category? 1: -1));

// sort ages
// const sortAges = ages.sort((a, b) => a-b);  //Ascending order
// const sortAges2 = ages.sort((a, b) => b-a);  //Descending order
// console.log(sortAges);
// console.log(sortAges2);

//---------------- reduce ------------------
// Age sum
const ageSum = ages.reduce(function (total, age) {
    return total + SubmitEvent;
}, 0);

const ageSum2 = ages.reduce((total, sum) => total + sum, 0);

// total years for all companies
const totalYears = companies.reduce(function (total, company) {
    return total + (company.end - company.start);
}, 0);

const totalYears2 = companies.reduce((total, company) => total + (company.end - company.start), 0);

//--------------- Combine methods ------------------
// age < 18 && plus 1 map
const map18 = ages.map(age => (age < 18 ? age : 0))
    .filter(age => age != 0)
    .map(age => age + 1);

const combined = ages.map(age => age * 2)  //twice of each age
.filter(age => age>= 50)           //ages >= 50
.sort((a, b) => (a - b))          // sort - ascending order
.reduce((sum, age) => (sum + age), 0);   // sum of all ages

console.log(combined);
