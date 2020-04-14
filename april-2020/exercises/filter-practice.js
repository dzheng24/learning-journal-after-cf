// 4/13/20 Monday 

// Filter Practice 

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named notInFirstArray that, given two arrays as input, uses filter to return an array of all the elements in the second array that are not included in the first array.

For example, notInFirstArray([1,2,3], [1,2,3,4]) returns [4].
------------------------------------------------------------------------------------------------ */

const notInFirstArray = (forbiddenValues, arr) => {
  // Solution code here...
  let result = arr.filter(x => {
    return !forbiddenValues.includes(x);
  })
  return result;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named getBaseStatGreaterThan that, given the snorlaxData, below, and an integer as input, uses filter to return an array containing all stats with a baseStat greater than the integer.

For example, getBaseStatGreaterThan(snorlaxData.stats, 50) will return an array containing the 'special-defense' and 'special-attack' objects.
------------------------------------------------------------------------------------------------ */

const snorlaxData = {
  stats: [
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/6/',
        name: 'speed',
      },
      effort: 5,
      baseStat: 30,
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/5/',
        name: 'special-defense',
      },
      effort: 2,
      baseStat: 110,
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/4/',
        name: 'special-attack',
      },
      effort: 9,
      baseStat: 65,
    },
  ],
  name: 'snorlax',
  weight: 4600,
};

const getBaseStatGreaterThan = (arr, minBaseStat) => {
  // Solution code here...
  let result = arr.filter(x => minBaseStat < x.baseStat);
  return result;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function named getStatName that is an extension of your getBaseStatGreaterThan function from challenge 4. For this function, extend your solution from challenge 4 to only return the name of the stat, rather than the entire stat object.

For example, getStatName(snorlaxData.stats, 50) will return ['special-defense', 'special-attack'].
------------------------------------------------------------------------------------------------ */

const getStatName = (arr, minBaseStat) => {
  // Solution code here...
  let result = arr.filter(x => minBaseStat < x.baseStat);
  let answer = result.map(person => person.stat.name);
  return answer;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6

Write a function named getCharactersWithoutChildren that, given the array of characters, below, uses filter to return an array of all characters without children.
------------------------------------------------------------------------------------------------ */

const characters = [
  {
    name: 'Eddard',
    spouse: 'Catelyn',
    children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
    house: 'Stark',
  },
  {
    name: 'Jon',
    spouse: 'Lysa',
    children: ['Robin'],
    house: 'Arryn',
  },
  {
    name: 'Cersei',
    spouse: 'Robert',
    children: ['Joffrey', 'Myrcella', 'Tommen'],
    house: 'Lannister',
  },
  {
    name: 'Daenarys',
    spouse: 'Khal Drogo',
    children: ['Drogon', 'Rhaegal', 'Viserion'],
    house: 'Targaryen',
  },
  {
    name: 'Mace',
    spouse: 'Alerie',
    children: ['Margaery', 'Loras'],
    house: 'Tyrell',
  },
  {
    name: 'Sansa',
    spouse: 'Tyrion',
    house: 'Stark',
  },
  {
    name: 'Jon',
    spouse: null,
    house: 'Snow',
  },
];

const getCharactersWithoutChildren = (arr) => {
  // Solution code here...
  let result = arr.filter(x => !x.children);
  return result;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal

Write a function named evenOddNumericValues that, given an array as input, uses filter to remove any non-numeric values, then uses map to generate a new array containing the string 'even' or 'odd', depending on the original value.

For example: evenOddNumericValues(['Gregor', 2, 4, 1]) returns ['even', 'even', 'odd'].
------------------------------------------------------------------------------------------------ */

const evenOddNumericValues = (arr) => {
  // Solution code here...
  let numbersOnly = arr.filter(x => typeof x === 'number');
  let result = numbersOnly.map(num => {
    if (num % 2 === 0) {
      return num = 'even';
    } else {
      return num = 'odd';
    }
  })
  console.log(result);
};

evenOddNumericValues(['Gregor', 2, 4, 1]);