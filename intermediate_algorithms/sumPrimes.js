function sumPrimes(num) {
  return Array(num)
    .fill()
    .map((e, i) => i + 1)
    .filter(e => {
      if(e === 1) return false;
      for(var i = 2; i < e; i++) {
        if(e % i  === 0) return false;
      }
      return true;
    })
    .reduce((a, e) => a + e); 
}

console.log(sumPrimes(10));