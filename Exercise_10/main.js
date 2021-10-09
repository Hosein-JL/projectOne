let array = ["hello", 20, "a", "hi", "ali"];

function indexOfStr(arr, str) {
  for (i = 0; i <= arr.length; i++) {
    if (arr[i] === str) {
      return `index : ${arr.indexOf(str)}`;
    } else if (arr[i] !== str && i == arr.length) {
      return "not found";
    }
  }
}

let result = indexOfStr(array, "hio");
console.log(result);
