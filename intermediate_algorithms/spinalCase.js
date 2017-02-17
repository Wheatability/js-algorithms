function spinalCase(str) {
  // split using regular expression that matches whitespace, underscores, or trailing Capitalization
  return str.split(/\s|_|(?=[A-Z])/g).join('-').toLowerCase();
}

spinalCase('This Is Spinal Tap');
