/* **INSTRUCTIONS**
Return true if the string in the first element of the given array contains all of the letters of the string in the second element of the given array */

//initial solution 5/15/18

function mutation(arr) {
  var firstEle = arr[0].toLowerCase();
  var testEle = arr[1].toLowerCase();
  var testArr = testEle.split("");
  var check = 0;
  
  for (var i = 0; i < testArr.length; i++) {
    if (firstEle.indexOf(testArr[i]) === -1){
      check += 1;
    }
  } console.log(check === 0);
} 

mutation(["string", "string"]);