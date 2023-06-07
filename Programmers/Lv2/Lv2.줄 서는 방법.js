function solution(n, k) {
  var answer = [];
  let max = 1;
  let nums = [];

  for (let i = 1; i <= n; i++) {
    // nums에 1 ~ n에 해당하는 사람의 번호 push
    nums.push(i);

    // n! (줄을 설 수 있는 모든 경우의 수)
    max *= i;
  }

  while (n >= 1) {
    max = max / n;
    n--;

    if (n === 0) break;

    // answer에 들어가야 하는 사람의 번호는 k를 (n - 1)!로 나눈 몫에 해당
    // 만일 k / (n - 1)!의 나머지가 0인 경우 k / (n - 1)! - 1에 해당하는 사람의 번호가 answer에 들어가야 함
    answer.push(nums[k % max === 0 ? k / max - 1 : Math.floor(k / max)]);
    // answer 배열에 들어간 사람의 번호는 이미 줄을 선 사람이기 때문에 nums 배열에서 삭제
    nums.splice(k % max === 0 ? k / max - 1 : Math.floor(k / max), 1);
    // k는 k / (n - 1)!의 나머지 또는 (n - 1)!로 초기화 해줌
    k = k % max || max;
  }

  // 위의 while문이 종료된 후 줄을 서지 않은 마지막 한 사람이 남게 되는데, 마지막 사람의 번호를 answer 배열의 맨 뒤에 넣어서 return
  return [...answer, nums[0]];
}
