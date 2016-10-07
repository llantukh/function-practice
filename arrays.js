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
];



// ---------------------------
// 1. Find largest number
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
numbers.sort(function(a, b) {
  return a - b;
});

//>>>this puts the numbers in order from smallest to largest,
//how do I get it to spit out that last number?




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



// ---------------------------
// 4. Find odd numbers
// ---------------------------


// ---------------------------
// 5. Find words that contain `is`
// ---------------------------



// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------




// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript,
//    then sort them alphabetically
// ---------------------------
