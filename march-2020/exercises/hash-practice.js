// 3/15/20 Sunday 

// find the first recurring character

function firstRecurringChacter2(input) {
  let seen = {};
  for (let i = 0; i < input.length; i++) {
    if (seen[input[i]]) {
      return input[i];
    } else {
      seen[input[i]] = true;
    }
  }
}

console.log(firstRecurringChacter2([8,5,5,8,3,7,1,2,4]));
