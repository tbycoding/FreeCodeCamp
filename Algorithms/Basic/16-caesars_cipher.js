/* **INSTRUCTIONS**
Given an encoded string, return a decoded string. This task replicates the ROT13 cipher - shifting a given letter by 13 places. Example - "A"<->"N", "B"<->"O", etc.
**Constraints** All letters will be uppercase. Do not transform any non-alphabetic characters but do pass them on*/

//initial solution 5/15/18

function rot13(str) {
  var tempArr = [];

  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 64 && str.charCodeAt(i) <= 77) {
      tempArr.push(String.fromCharCode(str.charCodeAt(i) + 13));
    } else if (str.charCodeAt(i) > 77 && str.charCodeAt(i) <= 90){
      tempArr.push(String.fromCharCode(str.charCodeAt(i) - 13));
    } else {
      tempArr.push(String.fromCharCode(str.charCodeAt(i)));
    } 
    
  } console.log(tempArr.join(""));
}
rot13("string");