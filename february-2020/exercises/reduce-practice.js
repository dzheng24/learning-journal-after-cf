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

// single cluster: flatten array
// Say you had an array of blog articles, each containing an array of comments. If you wanted to get a list of all comments, you could use the reduce function:

const blogs = [
  { title: "Not so popular", comments: [ "Its ok...I guess"]},
  { title: "Popular...ish", comments: [ "Sweet", "Tell me more"]},
  { title: "Super popular", comments: [ "This is amazing, thanks!","Wow, I never thought about it this way", "Great stuff!"]}
]

const comments = blogs.reduce((accumulator, blog) => {
  return accumulator.concat(blog.comments);
},[])

//-----------------------------------

// multiple cluster: tally of items 

const fruit = [
  'apple', 'banana', 'cherry', 'mango', 
  'mango', 'banana', 'cherry', 'apricot', 
  'apple', 'apple', 'guava', 'banana', 'guava'
]

const fruitTally = fruit.reduce((currentTally, currentFruit) => {
  currentTally[currentFruit] = (currentTally[currentFruit] || 0) + 1;
  return currentTally;
}, {})

// multiple cluster: date categorization 
// Say you have a list of a users’ transactions with Unix timestamps and you wanted to group them by month (so a user could open one month, and close the others for better UX)

const transactions = [
  { timestamp: 1546681958000, amount: 400},
  { timestamp: 1542271921000, amount: -200},
  { timestamp: 1549188947000, amount: 500},
  { timestamp: 1541982961000, amount: 660},
  { timestamp: 1542811972000, amount: 431},
  { timestamp: 1543151943000, amount: -500},
  { timestamp: 1548581618000, amount: -1200},
]

transactions.sort((a, b) => (b - a)) // this sets them in a descending order 

const monthlyTransactions = transactions.reduce((transactionGroup, transaction) => {
  const date = new Date(transaction.timestamp);
  const year = date.getFullYear();
  const month = `${date.toLocaleString('en-us', {month: 'long'})} ${year}`

  transactionGroup[month] = (transactionGroup[month] || []); // this initializes array if it doesn't exist
  transactionGroup[month].push(transaction.amount); // push transaction amount to current month 
  return transactionGroup;
}, {})

console.log(monthlyTransactions);