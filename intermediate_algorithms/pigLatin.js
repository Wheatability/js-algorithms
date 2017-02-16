function translatePigLatin(str) {
  let chars = str.split('');
  let vowels = new RegExp(/[aeiou]/i);
  let startingCons = [];
  let index = 0;
  while(!chars[index].match(vowels)) {
    startingCons.push(chars[index]);
    index++;
  }
  if(startingCons.length === 0) {
    return str + 'way';
  }
  let ending = startingCons.concat(['ay']);
  return str.split('').concat(ending).slice(startingCons.length).join('');
}

console.log(translatePigLatin("glove"));