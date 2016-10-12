// instructors[2].firstname
//
// you can always go deeper into data info.
//
// .forEach = used on arrays
//    [1,2,3,4].forEach( function (x) {
//      console.log(x+1);
//    });
//
// .map
//
// .filter
//
// .reduce

// ---------------------------
// The Arrays You Will Work With
// ---------------------------

var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
]; //this is an array of objects and each object has two properties



// ---------------------------
// 1. Find largest number
// ---------------------------

function findMax (nums) {
  var biggest = 0;
  for (var count = 0; count < nums.length; count++) {
    var currentNum = nums[count];
    if (currentNum > biggest) {
      biggest = currentNum;
    }
  }
  return biggest;
};

// ---------------------------
// 2. Find longest string
// >>>so first i will need to count the characters in each word, find the one with the highest count,
// and spit that word out as the final result
// ---------------------------
var strings = ['this','is','a','collection','of','words'];

var count = 0;
while (strings[count] !== undefined) {
  count +=1;
}; //this counts how many words there are, not how many characters are in each word

// ---------------------------
// 3. Find even numbers
// ---------------------------

var findEvens = function (nums){
  var result = [];

  for (var i = 0; i < nums.length; i++) {
    var currentNum = nums[i];
    if (currentNum % 2 === 0) {
      result.push(currentNum);
    }
  }

  return result;
}


// ---------------------------
// 4. Find odd numbers
// ---------------------------

var findOdds = function (nums){
  var result = [];

  for (var i = 0; i < nums.length; i++) {
    var currentNum = nums[i];
    if (currentNum % 2 !== 0) {
      result.push(currentNum);
    }
  }

  return result;
}


// ---------------------------
// 5. Find words that contain `is`
// ---------------------------
"cookies".includes("cook")     will return true


// ---------------------------
// 6. Join Both Arrays Together [you need two arguments and two loops]
// ---------------------------

var concat = function (items1, items2) {
  var result =[];

  for (var index = 0; index < items1.length; index++) {
    result.push(items1[index]);

    for (var index = 0; index < items2.length; index++) {
      result.push(items2[index]);
  }
  return result;
};



// ---------------------------
// 7. Use the Instructors array and find all that teach JavaScript,
//    then sort them alphabetically
// ---------------------------
currentItem .teaches === javascript
