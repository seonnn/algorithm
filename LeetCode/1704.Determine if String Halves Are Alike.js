var halvesAreAlike = function (s) {
  let midIdx = s.length / 2;
  let front = s.slice(0, midIdx);
  let back = s.slice(midIdx);
  let vowelsF = { a: 0, e: 0, i: 0, o: 0, u: 0, A: 0, E: 0, I: 0, O: 0, U: 0 };
  let vowelsB = { a: 0, e: 0, i: 0, o: 0, u: 0, A: 0, E: 0, I: 0, O: 0, U: 0 };

  for (let i = 0; i < midIdx; i++) {
    if (typeof vowelsF[front[i]] === "number") {
      vowelsF[front[i]] += 1;
    }

    if (typeof vowelsB[back[i]] === "number") {
      vowelsB[back[i]] += 1;
    }
  }

  return (
    Object.values(vowelsF).reduce((acc, cur) => acc + cur, 0) ===
    Object.values(vowelsB).reduce((acc, cur) => acc + cur, 0)
  );
};
