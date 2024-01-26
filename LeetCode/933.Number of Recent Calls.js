class RecentCounter {
  constructor() {
    this.min = 0;
    this.queue = [];
    this.res = [null];
  }
}

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.min = t - 3000;
  this.queue.push(t);

  while (this.queue.length && this.queue[0] < this.min) {
    this.queue.shift();
  }

  this.res.push(this.queue.length);

  return this.res.at(-1);
};
