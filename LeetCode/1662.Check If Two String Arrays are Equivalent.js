var arrayStringsAreEqual = function (word1, word2) {
  word1 = word1.join("");
  word2 = word2.join("");

  return word1 === word2;
};

// reduce 메서드 사용
var arrayStringsAreEqual = function (word1, word2) {
  return word1.reduce((acc, cur) => acc + cur, "") === word2.reduce((acc, cur) => acc + cur, "");
};
