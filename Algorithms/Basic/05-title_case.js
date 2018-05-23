/* **INSTRUCTIONS**
Return given string with first letter of each word capitalized */

//initial solution 5/13/18

function titleCase(str) {
  var arr = [];
  var tempArr = [];
  str = str.toLowerCase();
  arr = str.split(" ");
  
  for (var i = 0; i < arr.length; i++) {
    var tempCap = arr[i][0].toUpperCase();
    var tempStr = arr[i].substr(1);
    tempStr = tempCap.concat(tempStr);
    tempArr.push(tempStr);
    
  }
  var newStr = tempArr.join(" ");
  console.log(newStr);
}

titleCase("string");