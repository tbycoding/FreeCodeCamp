/* **INSTRUCTIONS**
Sort a given array and return the lowest index at which a given value should be inserted into the sorted given array */

//initial solution 5/15/18

function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort(function(a, b) {
    return a - b;
  }); 
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      console.log(i);
    }
  }
}

getIndexToIns([array], integer);