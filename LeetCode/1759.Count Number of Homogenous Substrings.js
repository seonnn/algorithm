// var countHomogenous = function (s) {
//   if (s.length === 1) return 1;

//   function getSum(n) {
//     let res = 0;

//     for (let i = 1; i <= n; i++) {
//       res += i;
//     }

//     return res % (10 ** 9 + 7);
//   }

//   let res = 0;
//   let cur = "";

//   cur = s[0];

//   for (let i = 1; i < s.length; i++) {
//     if (cur.at(-1) === s[i]) {
//       cur += s[i];
//     } else {
//       res += getSum(cur.length);
//       cur = s[i];
//     }

//     if (i === s.length - 1) res += getSum(cur.length);
//   }

//   return res;
// };

// 시간복잡도, 공간복잡도 개선
var countHomogenous = function (s) {
  let res = 0;
  let curLen = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      curLen++;
    } else {
      res = (res + (curLen * (curLen + 1)) / 2) % (10 ** 9 + 7);
      curLen = 1;
    }
  }

  res = (res + (curLen * (curLen + 1)) / 2) % (10 ** 9 + 7);

  return res;
};
