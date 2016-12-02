// using an Array
function rot13(str) {
  return str.split('').map(function (char) {
    var c = char.charCodeAt();
    // if C is a letter, add 13 for A-M, and subtract for N-Z
    if (char.match(/[A-Z]/)) {
      c = c < 78 ? (c + 13) : (c - 13);
    }
    return String.fromCharCode(c);
  }).join('');
}

// using String.prototype.replace()
function rot13(str) {
  return str.replace(/[A-Z]/g, function(c) {
    var cCode = c.charCodeAt();
    return String.fromCharCode(cCode < 78 ? (cCode + 13) : (cCode - 13));
  });
}
