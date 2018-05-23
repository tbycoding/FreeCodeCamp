/* **INSTRUCTIONS**
Repeat given string a given number of times. Return an empty string if number is not provided */

//initial solution 5/13/18

function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    str = "";
  } else {
    str = str.repeat(num);
  }
  console.log(str);
}

repeatStringNumTimes("string", integer);