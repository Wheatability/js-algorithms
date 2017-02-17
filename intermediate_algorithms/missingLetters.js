function fearNotLetter(str) {
  let missingChars = '';
  for(var i = 1; i < str.length - 1; i++){
    let currentChar = str.charCodeAt(i);
    let nextChar = str.charCodeAt(i + 1);
    if (nextChar !== currentChar + 1) {
      missingChars += String.fromCharCode(currentChar + 1);
    }
  }
  if(missingChars === '') {
    return undefined;
  }
  return missingChars;
}

fearNotLetter("abce");