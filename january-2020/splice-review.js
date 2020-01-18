'use strict';

const months = [
  'jan',
  'mar',
  'apr',
  'jun'
]

// inserts at index 1
months.splice(1, 0, 'FEB');
console.log(months);

// replaces 1 element at index 4 
months.splice(4, 1, 'MAY');
console.log(months);

const seahawks = [
  'russ',
  'marshawn',
  'dk',
  'tyler',
  'shaq'
]

// remove 1 element from index 3 
let removed = seahawks.splice(3, 1);
console.log(removed);
console.log(seahawks);

