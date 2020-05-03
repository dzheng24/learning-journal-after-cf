// 4/22/20 Wednesday 

let tables = [
  [1, 2, 3], 
  [4, 5, 6], 
  [7, 8, 9]
]

for(let i = 0; i < tables.length; i++) {
  let line = '';
  for (let j = 0; j < tables[i].length; j++) {
    let value = tables[i][j];
    line += value;
  }
}



/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

You friend Pat has a chain of stores around the greater Seattle area. He specializes in selling salmon cookies. Pat has data for the hourly sales of cookies per hour for each store. He wants to create an array of the total number of cookies sold per hour for all of his stores combined.

Write a function named grandTotal that adds up the cookies sales for each hour of operation for all of the stores combined. For example, the first element in the hourlySales array should be the sum of the cookies sold in the 9:00 a.m. hour at all five stores combined.

For this example, the total at 9:00 a.m. is 17 + 26 + 7 + 5 + 33, or 88 total cookies.

Return the array of the total number of cookies sold per hour for all of the stores combined.
------------------------------------------------------------------------------------------------ */

const hoursOpen = ['9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.', '8 p.m.'];

const firstPike = [17, 18, 23, 24, 24, 12, 13, 27, 30, 20, 24, 18];
const seaTac = [26, 5, 5, 59, 23, 39, 38, 20, 30, 7, 59, 43];
const seattleCenter = [7, 14, 19, 22, 15, 4, 23, 27, 28, 23, 1, 29];
const capHill = [5, 85, 58, 51, 50, 13, 33, 32, 47, 94, 31, 62];
const alkiBeach = [33, 31, 147, 130, 27, 93, 38, 126, 141, 63, 46, 17];

const cookieStores = [firstPike, seaTac, seattleCenter, capHill, alkiBeach];

const grandTotal = (stores) => {
  // Solution code here...
  let cookiesSoldPerHourForAllStores = new Array(hoursOpen.length).fill(0);
  for (let i = 0; i < stores.length; i++) {
    for (let j = 0; j < stores[i].length; j++) {
      let value = stores[i][j];
      cookiesSoldPerHourForAllStores[j] += value;
    }
  }
  return cookiesSoldPerHourForAllStores;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Pat has decided that he would also like to organize his data as objects containing the number of cookies sold per hour and the time.

Here is sample data for the 9:00 sales: { sales: '88 cookies', time: '9 a.m.' }.

Write a function named salesData that uses forEach to iterate over the hourlySales array and create an object for each hour. Return an array of the formatted data.
------------------------------------------------------------------------------------------------ */

const salesData = (hours, data) => {
  // Solution code here...
  let formattedData = [];
  let count = 0;
  data.forEach(x => {
    if (hours[count]) {
      formattedData.push({sales: x + ' cookies', time: hours[count]});
      count++;
    }    
  })
  
  console.log(formattedData);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3
Write a function named howManyTreats that will return the quantity of treats you need to pick up from the pet store today from this array.
------------------------------------------------------------------------------------------------ */

const errands = [
  { store: 'Grocery store',
    items: [ { name: 'Eggs', quantity: 12 }, { name: 'Milk', quantity: 1 }, { name: 'Apples', quantity: 3 }]
  },
  { store: 'Drug store',
    items: [ { name: 'Toothpaste', quantity: 1 }, { name: 'Toothbrush', quantity: 3 }, { name: 'Mouthwash',quantity: 1 } ]
  },
  { store: 'Pet store',
    items: [ { name: 'Cans of food', quantity: 8 }, { name: 'Treats', quantity: 24 }, { name: 'Leash', quantity: 1 } ]
  }
];

const howManyTreats = (arr) => {
  // Solution code here...
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].store === 'Pet store') {
      let found = arr[i].items;
      for (let j = 0; j < found.length; j++) {
        if (found[j].name === 'Treats') {
          console.log(found[j].quantity)
        }
      }
    };
  }
};
howManyTreats(errands);