var MyStack = function () {
  this.enqueue = [];
  this.dequeue = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.enqueue = [...this.enqueue, x];
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  this.dequeue = this.enqueue.slice(-1);
  this.enqueue = this.enqueue.slice(0, -1);
  return this.dequeue[0];
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.enqueue.at(-1);
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.enqueue.length === 0;
};
