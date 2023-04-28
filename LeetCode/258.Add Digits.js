var addDigits = function (num) {
  while (String(num).length > 1) {
    num = sum(String(num).split(""));
  }

  return num;
};

function sum(arr) {
  return arr.reduce((acc, cur) => +acc + +cur, 0);
}
