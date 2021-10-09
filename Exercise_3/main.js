let first = ["ali", "reza", 1, 1];
let secend = ["ali", true, 1, 1, 100];

function filterRepeat(first, secend) {
  var intersection = first.filter(function (val) {
    return secend.indexOf(val) > -1;
  });

  let result = [...new Set(intersection)];

  console.log(result);
}

filterRepeat(first, secend);




