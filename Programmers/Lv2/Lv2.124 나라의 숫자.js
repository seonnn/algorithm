function solution(n) {
  let answer = "";

  while (n > 0) {
    answer += n % 3 === 0 ? "4" : String(n % 3);
    n = n % 3 === 0 ? Math.floor(n / 3) - 1 : Math.floor(n / 3);
  }

  return answer.split("").reverse().join("");
}

// 효율성 실패
function solution(n) {
  let dp = [0, "1", "2", "4"];

  for (let i = 4; i <= n; i++) {
    dp[i] = i % 3 === 0 ? String(dp[Math.floor(i / 3) - 1]) + "4" : String(dp[Math.floor(i / 3)]) + String(i % 3);
  }

  return dp[n];
}
