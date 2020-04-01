// 3/31/20 Tuesday 

// practice factorial using recursion 

function factorialRecursive(number) {
  debugger;
  if (number === 1) {
    return 1;
  }
  return number * factorialRecursive(number - 1);
}

console.log(factorialRecursive(4));