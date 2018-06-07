/* **INSTRUCTIONS**
Return an array of the largest number in each provided sub-array */

//initial solution 5/13/18

function largestOfFour(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(Math.max(...arr[i]));
  }
  console.log(newArr);
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);