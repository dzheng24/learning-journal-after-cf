/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

Write a function named forLoopTwoToThe that, given an array of integers as input, iterates over the array and returns a new array. The returned array should contain the result of raising 2 to the power of the original input element.

You may choose to complete this challenge using a for loop, for...in syntax, or for...of syntax.

For example, twoToThe([1,2,3]) returns [2,4,8] because 2 ^ 1 = 2, 2 ^ 2 = 4, and 2 ^ 3 = 8.
------------------------------------------------------------------------------------------------ */

const forLoopTwoToThe = (arr) => {
  // Solution code here...
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.pow(2, arr[i]);
  }
  return arr;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named forEachTwoToThe that produces the same output as your forLoopTwoToThe function from challenge 1, but uses forEach instead of a for loop.
------------------------------------------------------------------------------------------------ */

const forEachTwoToThe = (arr) => {
  // Solution code here...
  let result = [];
  arr.forEach(x => result.push(Math.pow(2, x)))
  return result;
};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named charCode that, given an array of letters as an input, uses map to return a new array where each element is the result of the `charCodeAt` method on the original array element.

Read the MDN documentation on String.charCodeAt() if necessary.

For example: charCode(['h','i']) returns [104, 105].
------------------------------------------------------------------------------------------------ */

const charCode = (arr) => {
  // Solution code here...
  let result = arr.map(x => x.charCodeAt())
  return result;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function that, given an array of numbers as input, uses map to return a new array where each element is either the string "even" or the string "odd", based on each value.

If any element in the array is not a number, the resulting array should have the string "N/A" in its place.

For example: evenOdd([1,2,3]) returns ['odd','even','odd'].
------------------------------------------------------------------------------------------------ */

const evenOdd = (arr) => {
  // Solution code here...
  let result = arr.map(x => {
    if (typeof x !== 'number' ) {
       return x = 'N/A';
    }
    else if (x % 2 === 0) {
       return x = 'even';
    }
    else if (x % 2 !== 0) {
       return x = 'odd';
    }
  })
  return result;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6

Use the snorlaxAbilities data, below, for this challenge.

Write a function named extractAbilities that, given the array of abilities, uses map to create an array containing only the ability name.

Note: Because this function is expecting the array of abilities, it will be invoked as:
extractAbilities(snorlaxAbilities.abilities)
------------------------------------------------------------------------------------------------ */

const snorlaxAbilities = {
  abilities: [
    {
      slot: 3,
      is_hidden: true,
      ability: {
        url: 'https://pokeapi.co/api/v2/ability/82/',
        name: 'gluttony',
      },
    },
    {
      slot: 2,
      is_hidden: false,
      ability: {
        url: 'https://pokeapi.co/api/v2/ability/56/',
        name: 'cute charm',
      },
    },
    {
      slot: 1,
      is_hidden: false,
      ability: {
        url: 'https://pokeapi.co/api/v2/ability/17/',
        name: 'immunity',
      },
    },
  ],
  name: 'snorlax',
  weight: 4600,
};

const extractAbilities = (arr) => {
  // Solution code here...
  let result = arr.map(x => x.ability.name);
  return result;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7

Use the snorlaxStats data, below, for this challenge.

Write a function named extractStats that, given an array of stats, uses map to return an array of objects containing the stat name and the total.

The total should be the sum of the effort and the baseStat.

Here is an example of a single array element: { name: 'speed', total: 35 }
------------------------------------------------------------------------------------------------ */

const snorlaxStats = {
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

const extractStats = (arr) => {
  // Solution code here...
  let result = arr.map(x => {
    return {name: x.stat.name, total: x.effort + x.baseStat};
  })
  return result;
};
console.log(extractStats(snorlaxStats.stats))