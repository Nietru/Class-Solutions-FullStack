/**
  Write a function that takes in an array of numbers and outputs the maximum number.

  Ex:
  Input: [ 1, 2, 3 ]
  Output: 3

  Input: [ 3, 6, 4, 5, 2, 1 ]
  Output: 6

  Input: [ 3, 3, 3 ]
  Output: 3
 */


/**
 * sort the array & return the last element
 * itterate over the array and compare with the previous max number
 * 
 * @param {Array} numbers 
 * @returns {number}
 */

function getMaxNumber(numbers) {
  var max = numbers[0];
  
  for (var i = 1; i < numbers.length; i++) {
    if (max < numbers[i]) {
      max = numbers[i];
    }
  }

  return max;
}

console.log(getMaxNumber([ 3, 6, 4, 5, 2, 1 ]));