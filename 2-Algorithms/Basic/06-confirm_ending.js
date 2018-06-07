/* **INSTRUCTIONS**
Check if given string ends with the given target
**Constraint** Do not use .endsWith() method */

//initial solution 5/13/18

function confirmEnding(str, target) {
  console.log(target === str.substr(str.length - target.length, str.length));
}

confirmEnding("str", "target");