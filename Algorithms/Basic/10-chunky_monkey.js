/* **INSTRUCTIONS**
Split an array into groups the length of the given size(integer) and returns them as a two dimensional array */

//solution 5/13/18

function chunkArrayInGroups(arr, size){
  for (var i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  } console.log(newArr);
}

chunkArrayInGroups([array], integer);

//initial solution 5/13/18
/*
function chunkArrayInGroups(arr, size) {
  var newArr = [];
  var tempArr = [];
  var i = 0;

  while (i < arr.length) {
    tempArr = arr.slice(i, i + size);
    newArr.push(tempArr);
    i = i + size;
  } console.log(newArr);
}

chunkArrayInGroups([array], integer);
*/