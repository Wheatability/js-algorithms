// Using if else logic and String.slice()
function truncateString(str, num) {
  if (num < str.length) {
    if (num > 3) {
      return str.slice(0, num - 3) + '...';
    } else {
      return str.slice(0, num) + '...';
    }
  }
  return str;
}

// Using ternary operator
function truncateString(str, num) {
  if (num < str.length) {
    return num > 3 ? str.slice(0, num - 3) + '...' : str.slice(0, num) + '...';
  }
  return str;
}