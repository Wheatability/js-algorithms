function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  collection.forEach((obj) => {
    let containsAll = true;
    Object.keys(source).forEach((key)=>{
      if(!(obj.hasOwnProperty(key) && obj[key] === source[key])){
        containsAll = false;
      }
    });
    if(containsAll) {
      arr.push(obj);
    }
  });
  // Only change code above this line
  return arr;
}



console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }));