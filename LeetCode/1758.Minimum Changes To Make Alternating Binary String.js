var minOperations = function (s) {
  let str1 = s[0];
  let str2 = s[0] === "0" ? "1" : "0";

  let cnt1 = 0;
  let cnt2 = 1;

  for (let i = 1; i < s.length; i++) {
    if (str1 === s[i]) {
      cnt1++;
      str1 = s[i] === "0" ? "1" : "0";
    } else str1 = s[i];

    if (str2 === s[i]) {
      cnt2++;
      str2 = s[i] === "0" ? "1" : "0";
    } else str2 = s[i];
  }

  return Math.min(cnt1, cnt2);
};
