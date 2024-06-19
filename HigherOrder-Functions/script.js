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
//---------------- reduce ------------------