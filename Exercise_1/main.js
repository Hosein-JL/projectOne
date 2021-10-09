function triangle(num, str) {
  for (i = 1; i <= num; i++) {
    result = "";
    for (k = 0; k <= num - i; k++) {
      result += " ";
    }
    for (j = 0; j < i; j++) {
      result += str + " ";
    }
    console.log(result);
  }
}

triangle(5, "*");
