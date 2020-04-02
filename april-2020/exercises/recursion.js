// 4/1/20 Wednesday 

// Fibonacci Problem 
// Given a number N, return the index value of the Fibonacci sequence, where the sequence is:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...
// The pattern of the sequence is that each value is the sum of the 2 previous values
// Ex. N = 5 -> 2 + 3

function fibonacci(n) {
  debugger;
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 2) + fibonacci(n - 1);
}

// console.log(fibonacci(8));

function reverseStringRecursive(str) {
  debugger;
  if (str === '') {
    return '';
  } else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
}

console.log(reverseStringRecursive('hello'));