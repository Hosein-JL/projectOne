var array = [100, -25, 368, -67, 456, -2360, 9, 899, 1001];

function largestNumber(arr) {
  var largest = arr[0];
  for (i = 0; i <= largest; i++) {
    if (arr[i] > largest) {
      var largest = arr[i];
    }
  }
  console.log(largest);
}

largestNumber(array);


