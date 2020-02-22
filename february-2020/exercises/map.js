// map practice
// https://www.taniarascia.com/understanding-map-and-set-javascript/

// A map is a collection of key/value pairs that can use any data type as a key, and can maintain the order of its entries. 

const map = new Map();

// adding values to the map using the set() method

map.set('firstName', 'David');
map.set('lastName', 'Zheng');
map.set('hobby', 'skateboarding');
map.set('favoriteMusic', 'hip-hop')

// console.log(map);

const david = {
  firstName: 'David',
  lastName: 'Zheng',
  student: true
}

// convert david object to a map:

const davidMap = new Map(Object.entries(david));

// convert david map back to object

const davidObj = Object.fromEntries(davidMap);

// maps allow any data type as keys, and do not allow duplicate keys 

////////////////////////////////////////////

const objAsKey = { foo: 'bar' };
const obj = {
  [objAsKey] : 'What will happen?',
}

// console.log(obj);

const map2 = new Map();
map2.set(objAsKey, 'What will happen?');

// console.log(map2);

/////////////////

console.log(davidMap);

// has() method checks for existence of an item in a map; returns a boolean value 

console.log(davidMap.has('studesnt')); 

// get() method retrieves a value by key

console.log(davidMap.get('firstName'));

// size retrieves the count of items in a map

console.log(davidMap.size);

// delete() method removes an item from a Map by key; returns a boolean value 

console.log(davidMap.delete('student'));

console.log(davidMap);

// clear() method can delete all values 