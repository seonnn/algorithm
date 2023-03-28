function solution(cards1, cards2, goal) {
  let pointer1 = 0;
  let pointer2 = 0;

  for (let i = 0; i < goal.length; i++) {
    if (goal[i] === cards1[pointer1]) {
      pointer1++;
    } else if (goal[i] === cards2[pointer2]) {
      pointer2++;
    } else return "No";
  }
  return "Yes";
}
