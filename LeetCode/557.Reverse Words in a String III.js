var reverseWords = function (s) {
  s = s.split(" ");
  let res = "";

  for (let i = 0; i < s.length; i++) {
    res += `${s[i].split("").reverse().join("")} `;
  }

  return res.slice(0, -1);
};
