let firstArray = [1, 2, true, "red", 2.56, "JS"];
let secendArray = ["JS", 2, true, "red", 2.56, 1];

function arraysMatch(arr1, arr2) {
  arr1.sort();
  arr2.sort();
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

let trueOrFalse = arraysMatch(firstArray, secendArray);
console.log(trueOrFalse);
