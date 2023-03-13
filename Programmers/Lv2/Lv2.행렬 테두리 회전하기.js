function solution(rows, columns, queries) {
  var answer = [];
  let matrix = Array.from({ length: rows }, () => []);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 1; j <= columns; j++) {
      matrix[i].push(i * columns + j);
    }
  }

  for (let i = 0; i < queries.length; i++) {
    let [s1, s2, e1, e2] = queries[i];
    s1 = s1 - 1;
    s2 = s2 - 1;
    e1 = e1 - 1;
    e2 = e2 - 1;

    let target = [
      [s1, s2],
      [s1, e2],
      [e1, e2],
      [e1, s2],
    ];

    let prev = matrix[s1][s2];
    let min = prev;

    for (let j = 0; j < target.length; j++) {
      let [c1, c2] = target[j];
      let [n1, n2] = target[j + 1] || target[0];

      while (c1 !== n1 || c2 !== n2) {
        if (j === 0) {
          c2 += 1;
        } else if (j === 1) {
          c1 += 1;
        } else if (j === 2) {
          c2 -= 1;
        } else {
          c1 -= 1;
        }
        let temp = matrix[c1][c2];
        min = Math.min(min, temp);
        matrix[c1][c2] = prev;
        prev = temp;
      }
    }
    answer.push(min);
  }
  return answer;
}
