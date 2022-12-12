function solution(str1, str2) {
  let arr1 = getElement(str1);
  let arr2 = getElement(str2);

  let obj = {};

  for (let i = 0; i < arr1.length; i++) {
    if (!obj[arr1[i]]) obj[arr1[i]] = [0, 0];
    obj[arr1[i]][0] += 1;
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!obj[arr2[i]]) obj[arr2[i]] = [0, 0];
    obj[arr2[i]][1] += 1;
  }

  let union = 0;
  let intersection = 0;

  for (let i in obj) {
    union += Math.max(obj[i][0], obj[i][1]);
    intersection += Math.min(obj[i][0], obj[i][1]);
  }

  if (intersection === 0 && union === 0) return 65536;

  return Math.floor((intersection / union) * 65536);
}

function getElement(str) {
  let arr = [];
  let newStr = str.toLowerCase();

  for (let i = 0; i < str.length - 1; i++) {
    let code1 = newStr.charCodeAt(i);
    let code2 = newStr.charCodeAt(i + 1);

    if (code1 > 96 && code1 < 123 && code2 > 96 && code2 < 123)
      arr.push(newStr[i] + newStr[i + 1]);
  }

  return arr;
}
