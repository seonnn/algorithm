// 시간초과
var longestPalindrome = function (words) {
  let palindrome = [];
  let result = 0;
  let isSameStr = false;

  while (words.length) {
    let word = words.pop();
    let [s1, s2] = word.split("");
    let reverseWord = s2 + s1;
    let reverseIdx = words.indexOf(reverseWord);

    if (reverseIdx > -1) {
      palindrome.push(word);
      palindrome.push(reverseWord);
      words.splice(reverseIdx, 1);
    } else if (s1 === s2 && !isSameStr) {
      isSameStr = true;
      result += 2;
    }
  }

  result += palindrome.length * 2;

  return result;
};

// 해결
var longestPalindrome = function (words) {
  let map = new Map();
  let result = 0;
  let isSameAppeared = false;

  for (word of words) {
    map.set(word, (map.get(word) || 0) + 1);
  }

  while (words.length) {
    let word = words.pop();
    let reverseWord = word.split("").reverse().join("");

    if (map.get(word) >= 1) {
      map.set(word, map.get(word) - 1);
      if (map.get(reverseWord) >= 1) {
        map.set(reverseWord, map.get(reverseWord) - 1);
        result += 4;
      } else if (!isSameAppeared && word === reverseWord) {
        isSameAppeared = true;
        result += 2;
      }
    }
  }

  return result;
};
