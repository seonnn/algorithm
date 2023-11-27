var plusOne = function (digits) {
  let isTen = true;
  let pointer = digits.length - 1;

  while (isTen) {
    digits[pointer] += 1;

    if (digits[pointer] < 10) isTen = false;
    else {
      digits[pointer] = 0;
      pointer--;
    }

    if (pointer === -1) {
      digits.unshift(1);
      isTen = false;
    }
  }

  return digits;
};
