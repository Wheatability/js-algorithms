// Using a for loop:
function titleCase(str) {
  // Setup a new string for building our titlecase string.
  var newStr = '';
  // Convert old string to lower case and split into array of words
  var wordArr = str.toLowerCase().split(' ');
  // Build our new string one word at a time making the first letter capitalized.
  for(var i = 0; i < wordArr.length; i++) {
    newStr += wordArr[i][0].toUpperCase() + wordArr[i].slice(1);
    // Add a space after each word unless it is the last word in the string.
    if(i < wordArr.length - 1) {
      newStr += ' ';
    }
  }
  console.log(newStr);
  return newStr;
}

// Using built-in functions (more elegant)
function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(word){
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}
