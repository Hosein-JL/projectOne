let libraryObject = [
  { title: "The Road Ahead", author: "Bill Gates", readingStatus: true },
  { title: "Steve Jobs", author: "Walter Isaacson", readingStatus: true },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "SuzanneCollins",
    readingStatus: false,
  },
];

function library(obj) {
  for (i = 0; i < obj.length; i++) {
    if (obj[i].readingStatus == true) {
      console.log(`Already read '${obj[i].title}' by ${obj[i].author}.`);
    } else {
      console.log(`need to read '${obj[i].title}' by ${obj[i].author}.`);
    }
  }
}

library(libraryObject);


