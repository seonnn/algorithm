var MyHashMap = function () {
  this.hashMap = {};

  return null;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  this.hashMap[key] = value;

  return null;
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  return typeof this.hashMap[key] === "number" ? this.hashMap[key] : -1;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  delete this.hashMap[key];

  return null;
};
