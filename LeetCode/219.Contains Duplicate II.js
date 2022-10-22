var containsNearbyDuplicate = function (nums, k) {
  // 인자 nums(배열) 내 i번째 index와 j번째 index 요소를 비교했을 때
  //   요소의 값이 같고 인자 각 index 간 차이가 k(숫자) 이하이면 true를 반환
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && j - i <= k) return true;
    }
  }

  return false;
};
