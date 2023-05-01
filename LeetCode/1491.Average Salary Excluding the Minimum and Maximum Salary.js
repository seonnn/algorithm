var average = function (salary) {
  return (
    salary
      .sort((a, b) => a - b)
      .slice(1, -1)
      .reduce((acc, cur) => acc + cur, 0) /
    (salary.length - 2)
  );
};
