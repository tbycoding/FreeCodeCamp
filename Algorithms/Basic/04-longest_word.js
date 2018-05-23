/* **INSTRUCTIONS**
Return the longest word in the provided sentence */

//initial solution 5/13/18

function findLongestWord(str) {
  var arr = str.split(" ");
  var newArr = [];
  
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i].length);
  } 
  console.log(Math.max.apply(Math, newArr));
}

findLongestWord("string");