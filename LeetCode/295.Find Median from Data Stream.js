var MedianFinder = function () {
  this.arr = [];
};

// 이진탐색 활용
MedianFinder.prototype.addNum = function (num) {
  if (this.arr.length === 0) {
    this.arr.push(num);
    return;
  }

  let start = 0;
  let end = this.arr.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (this.arr[mid] < num) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  this.arr.splice(start, 0, num);
};

MedianFinder.prototype.findMedian = function () {
  let len = this.arr.length;
  let mid = Math.floor(len / 2);

  if (len % 2 === 1) {
    return this.arr[mid];
  } else {
    return (this.arr[mid] + this.arr[mid - 1]) / 2;
  }
};
