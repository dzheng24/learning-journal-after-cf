// 4/11/20 Saturday 

// From 301 Code Challenges: Slice, Join, Split, Splice 

/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal

Write a function named totalSumCSV that, given a string of comma-separated values (CSV) as input. (e.g. "1,2,3"), returns the total sum of the numeric values (e.g. 6).
------------------------------------------------------------------------------------------------ */

const totalSumCSV = (str) => {
  let total = 0;
  // Solution code here...
  let splitted = str.split(',');
  splitted.forEach(val => {
    return total += parseInt(val);
  })
  return total;
};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 9 - Stretch Goal

Write a function named removeVowels that takes in a string and returns a new string where all the vowels of the original string have been removed.

For example, removeVowels('gregor') returns 'grgr'.
------------------------------------------------------------------------------------------------ */

const removeVowels = (str) => {
  // Solution code here...
  let validator = /[aeiou]/g;
  let splitted = str.split('');
  let resultArray = [];
  splitted.forEach(letter => {
    if (validator.test(letter) === false) {
      resultArray.push(letter);
    }
  })
  return resultArray.join('');
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 10 - Stretch Goal

Write a function named extractVowels that takes in a string and returns an array where the first element is the original string with all the vowels removed, and the second element is a string of all the vowels that were removed, in alphabetical order.

For example, extractVowels('gregor') returns ['grgr', 'eo'].

Similarly, extractVowels('The quick brown fox') returns ['Th qck brwn fx', 'eioou']
------------------------------------------------------------------------------------------------ */

const extractVowels = (str) => {
  // Solution code here...
  let first = [];
  let second = [];
  let final = [];
  let validator = /[aeiou]/;
  for (let i = 0; i < str.length; i++) {
    if (validator.test(str[i]) === false) {
      first.push(str[i]);
    } else {
      second.push(str[i]);
    }
  }
  const order = {
    a : 1,
    e : 2,
    i : 3,
    o : 4,
    u : 5
  }
  second.sort((a, b) => {
    if (order[a] < order[b]) {
      return -1;
    }
  })
  final.push(first.join(''), second.join(''));
  return final;
};

extractVowels('The quick brown fox');


