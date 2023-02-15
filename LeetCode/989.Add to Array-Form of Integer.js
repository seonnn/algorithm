var addToArrayForm = function (num, k) {
  return String(BigInt(num.join("")) + BigInt(k)).split("");
};
