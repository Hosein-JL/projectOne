let array = ["a", "b", "1", "1", "a", "9", "a"];

function repeatsInArray(arr) {
  let counts = {};

  for (let i = 0; i < arr.length; i++) {
    if (counts[arr[i]]) {
      counts[arr[i]] += 1;
    } else {
      counts[arr[i]] = 1;
    }
  }
  for (let key in counts) {
    let max = Object.values(counts);

    if (counts[key] >= Math.max(...max)) {
      console.log(`${key} (${counts[key]} times)`);
    }
  }
}

repeatsInArray(array);
