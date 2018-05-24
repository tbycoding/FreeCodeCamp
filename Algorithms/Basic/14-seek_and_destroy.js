/* **INSTRUCTIONS**
Remove all elements from a given array that are the same value as the given arguments*/

//initial solution 5/15/18

function destroyer(arr) {
  var newArr = [];
  
  for (var k = 1; k < arguments.length; k++) {
    newArr.push(arguments[k]); 
  } //return newArr;
  for (var i = 0; i < newArr.length; i++){
    for (var j = 0; j < arr.length; j++){
      if (newArr[i] === arr[j]) {
        delete arr[j];
      } 
    } 
  }
  console.log(arr.filter(Boolean));
}

destroyer([array], arguments);