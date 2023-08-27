var convertToTitle = function (columnNumber) {
  const alphabet = [
    "",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const arr = [];

  while (true) {
    if (arr[arr.length - 1] === 26) columnNumber -= 1;

    if (columnNumber <= 26) {
      arr.push(columnNumber);
      break;
    }

    arr.push(columnNumber % 26 || 26);
    columnNumber = Math.floor(columnNumber / 26);
  }

  return arr.reverse().reduce((acc, cur) => acc + alphabet[cur], "");
};
