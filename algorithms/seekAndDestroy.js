// by converting extra arguments into an array and filtering arr
function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments, 1);
  return arr.filter(function(val) {
    // if the current value is found in args, remove it.
    return args.indexOf(val) === -1;
  });
}
