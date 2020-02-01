// this is reviewing by following along the below article
// https://codeburst.io/learn-let-var-and-const-in-easiest-way-with-guarantee-e6ecf551018a

function adult5(age) {
  if (age > 18) {
    var status = 'adult';
  }
  console.log(status);
}

// adult5(20);

function adult6(age) {
  if (age > 18) {
    let status = 'adult';
  }
  console.log(status);
}

// adult6(20);

// ES5
var num = 10;
for (var num = 0; num < 3; num++) {
  console.log('num inside for loop is: ' + num)
}
console.log('num outside for loop ' + num);

// ES6 
let num = 10;
for (let num = 0; num < 3; num++) {
  console.log('num inside for loop is: ' + num)
}
console.log('num outside for loop ' + num);

