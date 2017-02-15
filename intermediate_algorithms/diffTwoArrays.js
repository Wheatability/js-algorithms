
function difArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(
      number => !arr1.includes(number) || !arr2.includes(number)
    );
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
