function solution(s) {
  s = s.toLowerCase();
  let [p, y] = [0, 0];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p") {
      p += 1;
      continue;
    }

    if (s[i] === "y") y += 1;
  }

  return p === y;
}
