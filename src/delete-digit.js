const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digits = n.toString().split('');
  let maxNumber = 0;

  for (let i = 0; i < digits.length; i += 1) {
    const tempDigits = digits.slice();
    tempDigits.splice(i, 1);
    const currentNumber = parseInt(tempDigits.join(''));
    if (currentNumber > maxNumber) {
      maxNumber = currentNumber;
    }
  }

  return maxNumber;
}

module.exports = {
  deleteDigit
};
