const companies = [
  {name: "Company One", category: "Finance", start: 1981, end: 2003},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// map
// create array of company names

const companyNames = companies.map(company => company.name)

// console.log(companyNames);

// array of company with dates

const companyDates = companies.map(company => {
  return `${company.name} [${company.start} - ${company.end}]`
})

// console.log(companyDates);

const agesTimesTwo = ages.map(age => age * 2);

// console.log(agesTimesTwo);

//sort 

const sortedCompanies = companies.sort((c1, c2) => {
  if (c1.start > c2.start) {
    return 1;
  } else {
    return -1;
  }
})

//ternary way

const sortedCompanies2 = companies.sort((a, b) => a.start > b.start? 1 : -1)

// console.log(sortedCompanies2);

// sort ages 

const sortAges = ages.sort();

// console.log(sortAges);

const sortAges2 = ages.sort((a, b) => (a - b));

// console.log(sortAges2);


//reduce 
//old way of doing things using for loop

let ageSum = 0;
for (let i = 0; i < ages.length; i++) {
  ageSum += ages[i]
}

// console.log(ageSum);

// faster way using reduce

let ageSum2 = ages.reduce((total, age) => total + age, 0);

console.log(ageSum2);

// total years for all companies

let totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0)

console.log(totalYears);