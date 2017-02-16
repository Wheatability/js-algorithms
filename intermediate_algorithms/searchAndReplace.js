function myReplace(str, before, after) {
  let index = str.indexOf(before);

  // maintain case between old and new words
  if(str[index].charAt(0) === str[index].charAt(0).toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }
  return str.replace(before, after);
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
