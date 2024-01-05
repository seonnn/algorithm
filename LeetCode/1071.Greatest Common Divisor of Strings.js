var gcdOfStrings = function (str1, str2) {
  let length1 = Math.max(str1.length, str2.length);
  let length2 = Math.min(str1.length, str2.length);

  let remain;

  while (length2 !== 0) {
    remain = length1 % length2;
    length1 = length2;
    length2 = remain;
  }

  const chunk = str1.slice(0, length1);
  let word1 = str1.slice(0, length1).repeat(str1.length / length1);
  let word2 = str2.slice(0, length1).repeat(str2.length / length1);

  if (word1 === str1 && word2 === str2 && str1.slice(0, length1) === str2.slice(0, length1)) return chunk;

  return "";
};
