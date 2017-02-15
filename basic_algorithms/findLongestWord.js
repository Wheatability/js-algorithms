// Using a for loop:
function findLongestWord(str) {
  var longestLength = 0;
  // Turn string into array of words
  var wordArr = str.split(' ');
  // Loop over array of words to find longest word
  for (var i = 0; i < wordArr.length; i++) {
    // If the current word is longer, change longest length.
    if (wordArr[i].length > longestLength) {
      longestLength = wordArr[i].length;
    }
  }
  return longestLength;
}