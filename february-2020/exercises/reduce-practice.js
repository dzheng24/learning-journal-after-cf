// reduce-practice
// https://medium.com/nona-web/understanding-javascript-reduce-and-its-use-cases-49a89d3aaa80


// single cluster: sum of numbers in an array
const sum = [1, 2, 3].reduce((total, number) => total + number);
// returns 6

// single cluster: averaging numbers in an array
const average = [1, 2, 3].reduce((total, number, index, array) => {
  total += number;
  if (index === array.length - 1) {
    return total / array.length
  }
  return total;
})
console.log(average);


