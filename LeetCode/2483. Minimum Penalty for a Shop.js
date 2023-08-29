var bestClosingTime = function (customers) {
  let total = customers.split("").filter((str) => str === "Y").length;
  let arr = [total];
  let cnt = 0;

  for (let i = 1; i <= customers.length; i++) {
    if (customers[i - 1] === "Y") total -= 1;
    else cnt += 1;

    arr.push(total + cnt);
  }

  return cnt === customers.length ? 0 : arr.indexOf(Math.min(...arr));
};
