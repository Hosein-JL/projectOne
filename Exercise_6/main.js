let string = "JavaScript";

function filterVowels(str) {
  string = str.match(/[^aeiou]/gi);
  return string.join("");
}

let newString = filterVowels(string);
console.log(newString);
