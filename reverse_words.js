// Description:

// Write a reverseWords function that accepts a string a parameter, and reverses each word in the string.

// Example:

// reverseWords("This is an example!"); // returns  "sihT si na !elpmaxe"

function reverseWords(str) {
  // Go for it
  arr = str.split(' ');
  var res = [];
  var i;
  for(var i = 0; i < arr.length; i++){
    res.push(((arr[i].split('')).reverse()).join(''));
  }
  return res.join(' ');
}

//other great solution
function reverseWords(str) {
  return str.split(' ').map(function(word){
    return word.split('').reverse().join('');
  }).join(' ');
}
