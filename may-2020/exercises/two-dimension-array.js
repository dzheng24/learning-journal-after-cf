// 5/2/20 Saturday 

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named battleship that accepts a 2D array and two numbers: a row coordinate and a column coordinate.

Return "hit" or "miss" depending on if there's part of a boat at that position in the array. Assume the array has only one of two values at each index. '#' for part of a boat, or ' ' for open water.

Here is a sample board:
[
  ['#', ' ', '#', ' '],
  ['#', ' ', '#', ' '],
  ['#', ' ', ' ', ' '],
  [' ', ' ', '#', '#'],
]

The top row of the board is considered row zero and row numbers increase as they go down.
------------------------------------------------------------------------------------------------ */

const battleshipData = [
  ['#', ' ', '#', ' '],
  ['#', ' ', '#', ' '],
  ['#', ' ', ' ', ' '],
  [' ', ' ', '#', '#'],
];

const battleship = (board, row, col) => {
  //  Solution code here...
  let targetRow = board[row];
  for (let i = 0; i < targetRow.length; i++) {
    if (targetRow[col] === '#') {
      return 'hit';
    } else {
      return 'miss';
    }
  }
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function named calculateProduct that takes in a two-dimensional array of numbers, multiplies all of the numbers in each array, and returns the final product. This function should work for any number of inner arrays.

For example, the following input returns a product of 720: [[1,2], [3,4], [5,6]]
------------------------------------------------------------------------------------------------ */

const calculateProduct = (numbers) => {
  // Solution code here...
  let productArray = [];
  for (let i = 0; i < numbers.length; i++) {
    answer = numbers[i].reduce((total, current) => {
      total = total * current;
      return total;
    }, 1);
    productArray.push(answer);
  }
  let finalAnswer = productArray.reduce((total, current) => {
    total = total * current;
    return total;
  }, 1);
  console.log(finalAnswer);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6

Write a function named averageDailyTemperature that accepts a two-dimensional array representing average daily temperatures grouped week-by-week.

Calculate the average daily temperature during that entire period. Your output should be a single number. Write your function so it could accept an array with any number of weeks given to it.
------------------------------------------------------------------------------------------------ */

// Real daily average temperatures for Seattle, October 1-28 2017
const weeklyTemperatures = [
  [66, 64, 58, 65, 71, 57, 60],
  [57, 65, 65, 70, 72, 65, 51],
  [55, 54, 60, 53, 59, 57, 61],
  [65, 56, 55, 52, 55, 62, 57],
];

const averageDailyTemperature = (weather) => {
  // Solution code here...
  let counter = 0;
  let totalTemp = 0;
  for (let i = 0; i < weather.length; i++) {
    for (let j = 0; j < weather[i].length; j++) {
      let singleTemp = weather[i][j];
      totalTemp += singleTemp;
      counter++;
    }
  }
  return (totalTemp / counter);  
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7

Write a function named lowestWeeklyAverage that accepts a two-dimensional array of daily temperatures grouped week-by-week.

Calculate the average temperature for each week and return the value of the lowest weekly average temperature.

For example, in the data set below, the lowest weekly average is 46, which is the average of the temperatures in week 2. All other weeks have average temperatures that are greater than 46.
------------------------------------------------------------------------------------------------ */

let lowestWeeklyTemperatureData = [
  [33, 64, 58, 65, 71, 57, 60],
  [40, 45, 33, 53, 44, 59, 48],
  [55, 54, 60, 53, 59, 57, 61],
  [65, 56, 55, 52, 55, 62, 57],
];

const lowestWeeklyAverage = (weather) => {
  // Solution code here...
  let averageArray = [];
  for (let i = 0; i < weather.length; i++) {
    let sum = 0;
    for (let j = 0; j < weather[i].length; j++) {
      sum += weather[i][j];
    }
    let average = sum / weather[i].length;
    averageArray.push(average);
  }
  console.log(Math.min(...averageArray));
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 8

Write a function called excel that accepts a string representing rows and columns in a table.

Rows are seperated by newline "\n" characters. Columns are seperated by commas. For example, '1,1,1\n4,4,4\n9,9,9' represents a 3x3 table.

The function should parse the string as rows and columns and compute the sum of the values for each row. Return an array with the sum of the values in each row.

For example, excel('1,1,1\n4,4,4\n9,9,9') returns [3, 12, 27].
------------------------------------------------------------------------------------------------ */

const excel = (str) => {
  // Solution code here...
  let firstArray = str.split('\n');
  let secondArray = [];
  let finalArray = [];
  for (let i = 0; i < firstArray.length; i++) {
    let result = firstArray[i].split(',').map(x => parseInt(x));
    secondArray.push(result);
  }
  for (let j = 0; j < secondArray.length; j++) {
    let sum = 0;
    for (let s = 0; s < secondArray[j].length; s++) {
      sum += secondArray[j][s];
    }
    finalArray.push(sum);
  }
  console.log(finalArray);
};

excel('1,1,1\n4,4,4\n9,9,9');