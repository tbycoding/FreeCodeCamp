/* **INSTRUCTIONS**
Return true if the given string is a palindrome, otherwise return false */

//initial solution 5/13/18

function palindorme(str) {
  str = str.replace(/[^a-z0-9+]/gi, "").toLowerCase();
  var arr = str.split("");
  arr.reverse();
  arr = arr.join("");

  console.log (arr === str);
}

palindorme("string")