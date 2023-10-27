var longestPalindrome = function (s) {
  if (s.length === 1) return s;

  let minIdx = null;
  let maxIdx = null;
  let res = [];

  for (let i = 0; i < s.length; i++) {
    for (let j = s.length - 1; j > i; j--) {
      if (s[i] === s[j]) {
        minIdx = i;
        maxIdx = j;

        let start = i + 1;
        let end = j - 1;

        while (end > i && start <= end) {
          if (s[start] !== s[end]) {
            maxIdx = null;
            minIdx = null;
          }

          start++;
          end--;
        }
      }
      if (typeof minIdx === "number" && typeof maxIdx === "number") {
        res.push([minIdx, maxIdx, maxIdx - minIdx]);
        minIdx = null;
        maxIdx = null;
      }
    }
  }

  if (res.length < 1) return s[0];

  const [start, end] = res.sort((a, b) => b[2] - a[2])[0];

  return s.slice(start, end + 1);
};
