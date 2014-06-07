// Description:

// Write a function named sumDigits which takes a number as input and returns the sum of the 
// absolute value of each of the number's decimal digits. For example:

//   sumDigits(10); // Returns 1
//   sumDigits(99); // Returns 18
//   sumDigits(-32); // Returns 5
// Let's assume that all numbers in the input will be integer values.

function sumDigits(number) {
    var str = number.toString();
    if(str.substr(0,1) == '-') str = (number.toString()).substr(1);
    var len = str.length;
    var res = 0;
    for(var i = 0; i < len; i++){
        res += Number(str.substr(i,1));
    }
    return res;
}

//other great solution

function sumDigits(number) {
  return number.toString().split("").reduce(function(sum,n) {
    return n === '-' ? sum : sum+parseInt(n);
  },0);
}
