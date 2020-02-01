// This is my practice following along this article:
// https://bitsofco.de/for-in-vs-for-of/

const array = ['a', 'b', 'c', 'd'];

for (let i = 0; i < array.length; i++) {
  console.log(array[i])
}

// Result: a, b, c, d

// for..in loop
// enumerable properties
// works well with objects
// while this works with arrays, it is not suggested

// this will console log all the values in the object
const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
}

for (key in obj) {
  console.log(obj[key])
}

// this will console log all the values in the array
const seahawks = ['russell', 'marshawn', 'dk', 'tyler']

for (players in seahawks) {
  console.log(seahawks[players])
}

// for..of loop
// iterable collections
// doesn't work with objects, because they are not iterable 
// works well with arrays and strings 

const lakers = ['bron bron', 'davis', 'javale', 'kcp']

for (players of lakers) {
  console.log(players)
}

const string = 'lebron james'

for (characters of string) {
  console.log(characters)
}