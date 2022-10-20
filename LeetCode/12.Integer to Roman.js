var intToRoman = function (num) {
  let oneSymbol = ["I", "IV", "V", "IX"];
  let tenSymbol = ["X", "XL", "L", "XC"];
  let hundSymbol = ["C", "CD", "D", "CM"];
  let thouSymbol = "M";
  let result = "";

  let [one, ten, hund, thou] = String(num).split("").reverse();

  function helper(str, arr) {
    if (+str === 9) {
      result += arr[3];
    } else if (+str > 5) {
      result += arr[2];
      for (let i = 0; i < +str - 5; i++) {
        result += arr[0];
      }
    } else if (+str === 5) {
      result += arr[2];
    } else if (+str === 4) {
      result += arr[1];
    } else if (+str > 0) {
      for (let i = 0; i < +str; i++) {
        result += arr[0];
      }
    }
  }

  if (thou) {
    for (let i = 0; i < +thou; i++) {
      result += thouSymbol;
    }
  }

  if (hund) {
    helper(hund, hundSymbol);
  }

  if (ten) {
    helper(ten, tenSymbol);
  }

  if (one) {
    helper(one, oneSymbol);
  }

  return result;
};
