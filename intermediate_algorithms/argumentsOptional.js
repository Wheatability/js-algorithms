function addTogether(arg1, arg2) {
  if(typeof arg1 === 'number' && typeof arg2 === 'number') {
    return arg1 + arg2;
  } else if (typeof arg1 === 'number' && !arg2) {
    let prevNum = arg1;
    function addNums(newNum) {
      if(typeof newNum === 'number') {
         return prevNum + newNum;
      } 
      return undefined;
    }
    return addNums;
  }
  return undefined;
}

let sumTwoAnd = addTogether(2);
console.log(sumTwoAnd(3));