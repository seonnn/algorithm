var findArray = function (pref) {
  const arr = [];

  for (let i = 0; i < pref.length; i++) {
    if (i === 0) arr.push(pref[i]);
    else {
      arr.push(pref[i - 1] ^ pref[i]);
    }
  }

  return arr;
};
