// 4/10/20 Friday 

// Split Practice 

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named splitFoods that uses split to produce the same output as Challenge 3.

You may also use other string or array methods.
------------------------------------------------------------------------------------------------ */

const gruffaloCrumble = {
  name: 'How to make a Gruffalo Crumble',
  ingredients: [
    '1 medium-sized Gruffalo',
    '8 pounds oats',
    '2 pounds brown sugar',
    '4 pounds flour',
    '2 gallons pure maple syrup',
    '16 cups chopped nuts',
    '1 pound baking soda',
    '1 pound baking powder',
    '1 pound cinnamon',
    '6 gallons melted butter',
    '2 gallons fresh water',
  ],
  steps: [
    'Pre-heat a large oven to 375',
    'De-prickle the gruffalo',
    'Sprinkle with cinnamon, sugar, flour, and nuts',
    'Mix until evenly distributed',
    'Grease a 3-foot x 3-foot casserole dish',
    'Combine gruffalo compote with water to maintain moisture in the oven',
    'Fold together remaining ingredients to make the crisp',
    'Spread the crisp evenly over the gruffalo mixture',
    'Bake for 12-15 hours',
  ]
};

const splitFoods = (recipe) => {
  let result = [];
  // Solution code here...
  recipe.ingredients.forEach(ingred => {
    let splitted = ingred.split(' ');
    let sliced = splitted.slice(2);
    let joined = sliced.join(' ');
    result.push(joined);
  });
  return result;
};

// console.log(splitFoods(gruffaloCrumble));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6

Write a function named removeEvenValues that, given an array of integers as input, deletes all even values from the array, leaving no 'gaps' behind.

The array should be modified in-place.

For example:
  const integers = [1, 2, 3, 4, 5, 6];
  removeEvenValues(integers);
  console.log(integers) will print [1, 3, 5]
------------------------------------------------------------------------------------------------ */

const removeEvenValues = (arr) => {
  // Solution code here...
  for (let i = 0; i < arr.length; i++) {
    console.log('value is', arr[i], 'index is', i);
    if (arr[i] % 2 === 0) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
};

console.log(removeEvenValues([6, 3, 19, 43, 12, 66, 43]));
