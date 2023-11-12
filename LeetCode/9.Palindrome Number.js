var isPalindrome = function (x) {
  const str = x.toString();
  const length = str.length;
  let pointer1 = length % 2 === 1 ? Math.floor(length / 2) - 1 : length / 2 - 1;
  let pointer2 = length % 2 === 1 ? Math.floor(length / 2) + 1 : length / 2;

  while (pointer1 > -1) {
    if (str[pointer1] !== str[pointer2]) return false;
    pointer1--;
    pointer2++;
  }

  return true;
};
