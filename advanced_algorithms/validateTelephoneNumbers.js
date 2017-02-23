function telephoneCheck(str) {
  let re = new RegExp(/^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/);
  if (str.match(re)) {
    return true;
  } 
  return false;
}

console.log(telephoneCheck("1 (555) 555-5555"));