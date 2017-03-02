var Person = function(firstAndLast) {
  let nameArr = firstAndLast.split(' ');
  
  this.getFirstName = () => {
    return fullName[0];
  }

  this.getLastName = () => {
    return fullName[1];
  }

  this.getFullName = () => {
    return fullName.join(' ');
  }

  

  
};

var bob = new Person('Bob Ross');
bob.getFullName();
