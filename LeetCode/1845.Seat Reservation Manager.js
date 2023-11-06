/**
 * @param {number} n
 */
// var SeatManager = function(n) {

// };
class SeatManager {
  constructor(n) {
    this.isReserved = Array(n).fill(false);
  }
}

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function () {
  for (let i = 0; i < this.isReserved.length; i++) {
    if (this.isReserved[i] === false) {
      this.isReserved[i] = true;
      return i + 1;
    }
  }
};

/**
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function (seatNumber) {
  this.isReserved[seatNumber - 1] = false;
};
