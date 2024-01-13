var compress = function (chars) {
  let p = 0;
  let cnt = 1;
  let res = 0;

  for (let i = 0; i < chars.length; i++) {
    if (chars[i + 1] && chars[i] === chars[i + 1]) {
      cnt++;
    } else {
      chars[p] = chars[i];
      p++;
      res++;

      if (cnt > 1) {
        let cntStr = cnt.toString();
        for (let j = 0; j < cntStr.length; j++) {
          chars[p] = cntStr[j];
          p++;
        }
        res = res + cntStr.length;
      }

      cnt = 1;
    }
  }

  return res;
};
