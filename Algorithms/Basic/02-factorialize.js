/* **INSTRUCTIONS**
Return the factorial of provided integer */

//initial solution 5/13/18

function factorialize(num) {
  var arr = [];
  var newNum = 1;
  for (var i=1; i<=num; i++) {
    arr.push(i);
  }
  for (var j=0; j<num; j++) {
    newNum = newNum*arr[j];
  }
  console.log(newNum);
}

factorialize(integer);