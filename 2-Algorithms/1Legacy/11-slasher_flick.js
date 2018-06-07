/* **INSTRUCTIONS**
Return the remaining elements of an array after removing a given number of elements from the beginning */

//initial solution 5/13/18

function slasher(arr, howMany) {
  arr.splice(0, howMany);
  console.log(arr);
}

slasher([array], integer);