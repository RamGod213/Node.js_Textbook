const { odd, even } = require('./var');

function checkOddOrEven(num) {
  if (num % 2) { // 홀수면
    return odd;
  }
  return even;
}
// console.log(checkOddOrEven(4));
module.exports = checkOddOrEven;
