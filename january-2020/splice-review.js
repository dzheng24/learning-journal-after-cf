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

console.log('original seahawks array: ' + seahawks)

// remove 1 element from index 3, aka remove index 3  
let removed = seahawks.splice(3, 1);
console.log(removed);
console.log('updated seahawks ', seahawks);

// [russ, marshawn, dk, shaq]

// replace marshawn (index 1) to carson
let removedRB = seahawks.splice(1, 1, 'carson');
console.log('carson should be in ', seahawks);

// [russ, carson, dk, shaq]

// remove dk from the back, or 1 element from index of -2
seahawks.splice(-2, 1);
console.log('no dk', seahawks);

// [russ, carson, shaq]

// remove all elements after index 1(included)
seahawks.splice(1);
console.log(seahawks);

// [russ]




