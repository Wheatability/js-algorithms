function permAlone(str) {
  // Gets Permutations returned by getPerms() and finds permutations with non-repeating characters.
  let perms = getPerms(str),
      re = /(\w)\1/g,  // match repeating characters
      count = 0;
  perms.forEach((perm) => {
    if(!perm.match(re)) {  // if it doesnt have repeating characters count++
      count++;
    }
  });
  return count;
}

function getPerms(str) {
  let perms = [],
      nextPerm = [],
      chars = str.split('');  
      
  generate(chars);  // start off our recursion
  return perms;  // return created permutation array

  function generate(chars) {  // recursive function to generate perms
    if (chars.length === 0) perms.push(nextPerm.join(''));  // if we used all our chars, we have a complete perm.
    chars.forEach(() => {  // loop once for each char
      chars.push(chars.shift()); // rotate the chars array by 1
      nextPerm.push(chars[0]); // use first char 
      generate(chars.slice(1)); // recurse with remaining chars
      nextPerm.pop(); // clear for next permutation (after recursion comes back a level)
    });
  }
}


console.log(permAlone('aab'));