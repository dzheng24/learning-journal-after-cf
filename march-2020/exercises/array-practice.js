// 3/15/20 Sunday 
// array practice

// reversing a string 
function reverseString(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

// merge two sorted arrays 
function mergeTwoSortedArrays(arr1, arr2) {
  let mergedArray = [];
  let arrayOneValue = arr1[0];
  let arrayTwoValue = arr2[0];
  let i = 1;
  let j = 1;

  if (arr1.length === 0) {
    return arr2;
  }

  if (arr2.length === 0) {
    return arr1;
  }

  while (arrayOneValue || arrayTwoValue) {
    console.log(arrayOneValue, arrayTwoValue);
    if (!arrayTwoValue || arrayOneValue < arrayTwoValue) {
      mergedArray.push(arrayOneValue);
      arrayOneValue = arr1[i];
      i++;
    } else {
      mergedArray.push(arrayTwoValue);
      arrayTwoValue = arr2[j];
      j++;
    }
  }

  return mergedArray;
}
