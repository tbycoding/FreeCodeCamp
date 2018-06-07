/* **INSTRUCTIONS**
Truncate given string if it is longer than the given maximum string length. Return the truncated string with "..." at the ending (this will count towards the length of the string if the given maximum length is greater than 3). */

//initial solution 5/13/18

function truncateString(str, num) {
  if (num < 4 && str.length > num) {
    str = str.slice(0, num) + "...";
  }  else if (str.length <= num) {
    str = str;
  } else if (str.length > num - 3) {
    str = str.slice(0, num - 3) + "...";
  }
  console.log(str);
}

truncateString("string", integer);