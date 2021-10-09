let string = "progress report template elementary school";

function clearDuplicates(string) {
  let temp = "";
  let result = "";
  for (i = 0; i < string.length; i++) {
    if (string[i] == " ") {
      temp += string[i];
    } else {
      if (string[i] == result) {
        result = string[i];
      } else {
        result = string[i];
        temp += string[i];
      }
    }
  }
  console.log(temp);
}

clearDuplicates(string);
