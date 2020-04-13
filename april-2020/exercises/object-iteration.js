// 4/11/20 Saturday 

// Object Iteration Practice 

let characters = [
  {
    name: 'Eddard',
    spouse: 'Catelyn',
    children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
    house: 'Stark'
  },
  {
    name: 'Jon A.',
    spouse: 'Lysa',
    children: ['Robin'],
    house: 'Arryn'
  },
  {
    name: 'Cersei',
    spouse: 'Robert',
    children: ['Joffrey', 'Myrcella', 'Tommen'],
    house: 'Lannister'
  },
  {
    name: 'Daenarys',
    spouse: 'Khal Drogo',
    children: ['Drogon', 'Rhaegal', 'Viserion'],
    house: 'Targaryen'
  },
  {
    name: 'Mace',
    spouse: 'Alerie',
    children: ['Margaery', 'Loras'],
    house: 'Tyrell'
  },
  {
    name: 'Euron',
    spouse: null,
    children: [],
    house: 'Greyjoy'
  },
  {
    name: 'Jon S.',
    spouse: null,
    children: [],
    house: 'Snow'
  }
];

/*------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named hasChildrenValues that uses Object.values to determine if any given character in the data set has children.

This function should take in an array of data and a character name and return a Boolean.

For example:
hasChildrenValues(characters, 'Cersei') will return true
hasChildrenValues(characters, 'Sansa') will return false
------------------------------------------------------------------------------------------------ */

const hasChildrenValues = (arr, character) => {
  // Solution code here...
  let values = Object.values(arr);
  return values.some(x => x.name === character && x.children)
};

// console.log(hasChildrenValues(characters, 'Daenarys'));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named hasChildrenEntries that is similar to your hasChildrenValues function from challenge 3, but uses the data's entries instead of its values.

The input and output of this function are the same as the input and output from challenge 3.
------------------------------------------------------------------------------------------------ */

const hasChildrenEntries = (arr, character) => {
  // Solution code here...
  for (let i = 0; i < arr.length; i++) {
    let entries = Object.entries(arr[i]);
    // console.log(entries);
    if (entries[0].includes(character) && !entries[2].includes([])) {
      return true;
    } else {
      return false;
    }
  }
};

// console.log(hasChildrenEntries(characters, 'Euron'));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function named totalCharacters that takes in an array and returns the number of characters in the array.
------------------------------------------------------------------------------------------------ */

const totalCharacters = (arr) => {
  // Solution code here...
  // console.log(arr);
  let result = [];
  arr.forEach(x => {
    if (x.name) {
      result.push(x.name);
    }
    if (x.spouse) {
      result.push(x.spouse);
    }
    if (x.children.length) {
      let copy = x.children.slice(0);
      while (copy.length) {
        result.push(copy.shift());
      }
    }
  })
  console.log(result.length);
};

totalCharacters(characters);


/* ------------------------------------------------------------------------------------------------
CHALLENGE 6 - Stretch Goal

Write a function named houseSize that takes in the array of characters and creates an object for each house containing the name of the house and the number of members.

All of these objects should be added to an array named "sizes". Return the "sizes" array from the function.

For example: [{ house: 'Stark', members: 7 }, { house: 'Arryn', members: 3 }, ... ].
------------------------------------------------------------------------------------------------ */

const houseSize = (arr) => {
  const sizes = [];
  // Solution code here...
  arr.forEach(x => {
    let result = [];
    if (x.name) {
      result.push(x.name);
    }
    if (x.spouse) {
      result.push(x.spouse);
    }
    if (x.children.length) {
      let copy = x.children.slice(0);
      while (copy.length) {
        result.push(copy.shift());
      };
    }
    let data = {};
    data.house = x.house;
    data.members = result.length;
    sizes.push(data);
  })
  return sizes;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal

As fans are well aware, "When you play the game of thrones, you win or you die. There is no middle ground."

We will assume that Alerie Tyrell is deceased. She missed her daughter's wedding. Twice.

Write a function named houseSurvivors. You may modify your houseSize function from challenge 6 to use as the basis of this function.

This function should create an object for each house containing the name of the house and the number of members. If the spouse is deceased, do not include him/her in the total number of family members.

All of these objects should be added to an array named "survivors". Return the "survivors" array from the function.

For example: [ { house: 'Stark', members: 6 }, { house: 'Arryn', members: 2 }, ... ].
------------------------------------------------------------------------------------------------ */

const deceasedSpouses = ['Catelyn', 'Lysa', 'Robert', 'Khal Drogo', 'Alerie'];

const houseSurvivors = (arr) => {
  const survivors = [];
  // Solution code here...
  arr.forEach(x => {
    let result = [];
    if (x.name) {
      result.push(x.name);
    }
    if (x.spouse && !deceasedSpouses.includes(x.spouse)) {
      result.push(x.spouse);
    }
    if (x.children.length) {
      let copy = x.children.slice(0);
      while (copy.length) {
        result.push(copy.shift());
      };
    }
    let data = {};
    data.house = x.house;
    data.members = result.length;
    survivors.push(data);
  })
  return survivors;
};



console.log(houseSurvivors(characters));


