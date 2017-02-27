function updateInventory(arr1, arr2) {
  // convert 2d array to object data structure
  let inventory = arr1.reduce((acc, cur) => {
    acc[cur[1]] = cur[0];
    return acc;
  }, {});

  // update and add inventory items
  arr2.forEach((item) => {
    if (inventory.hasOwnProperty(item[1])) {
      inventory[item[1]] += item[0];
    } else {
      inventory[item[1]] = item[0];
    }
  });

  // convert back to 2d array and sort
  inventory = Object.keys(inventory).map((key) => {
    return [inventory[key], key];
  }).sort((a, b) => {
    if (a[1] > b[1]) {
      return 1;
    } else {
      return -1;
    }
  });

  return inventory;
}

// Example inventory lists (from FCC problem)
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [5, "Microphone"],
  [1, "Hair Pin"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));