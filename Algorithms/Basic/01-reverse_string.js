/* **INSTRUCTIONS**
Reverse the provided string */

// initial solution 5/12/18
/*
function reverseString(str) {
  var arr = [];
  arr = str.split("");
  str = arr.reverse();
  str = str.join("");
  console.log(str);
}

reverseString("string");
*/

// solution 5/22/18 

function reverseString(str) {
  console.log(str.split("").reverse().join(""));
}

reverseString("string");