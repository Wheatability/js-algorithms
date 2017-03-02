var Person = function(firstAndLast) {
  let nameArr = firstAndLast.split(' ');
  
  this.getFirstName = () => {
    return nameArr[0];
  };

  this.getLastName = () => {
    return nameArr[1];
  };

  this.getFullName = () => {
    return nameArr.join(' ');
  };

  this.setFirstName = (first) => {
    nameArr[0] = first;
    return nameArr[0];
  };

  this.setLastName = (last) => {
    nameArr[1] = last;
    return nameArr[1];
  };

  this.setFullName = (firstAndLast) => {
    nameArr = firstAndLast.split(' ');
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();
