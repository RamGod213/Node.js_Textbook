import { odd, even } from './var';

function checkOddOrEven(num) {
  if (num % 2) { // 홀수면
    return odd;
  }
  return even;
}

export default checkOddOrEven; //export default를 사용하면 '해당 모듈엔 개체가 하나만 있다’는 사실을 명확히 나태낼 수 있습니다.
// module.exports = checkOddOrEven;

