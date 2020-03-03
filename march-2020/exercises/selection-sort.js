// 3/2/20 Tuesday 

// practice what I learned yesterday: writing selection sort algorithm

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selection(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    let temp = array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}

console.log(selection(numbers));