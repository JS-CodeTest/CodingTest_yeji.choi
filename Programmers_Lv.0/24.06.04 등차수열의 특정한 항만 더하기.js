// 문제 설명
// 두 정수 a, d와 길이가 n인 boolean 배열 included가 주어집니다. 첫째항이 a, 공차가 d인 등차수열에서 included[i]가 i + 1항을 의미할 때, 이 등차수열의 1항부터 n항까지 included가 true인 항들만 더한 값을 return 하는 solution 함수를 작성해 주세요.

// 제한사항
// 1 ≤ a ≤ 100
// 1 ≤ d ≤ 100
// 1 ≤ included의 길이 ≤ 100
// included에는 true가 적어도 하나 존재합니다.

function solution(a, d, included) {
  const arr = [a];
  for (let i = 1; i < included.length; i++) {
    arr[i] = arr[i - 1] + d;
  }

  return arr.reduce((acc, cur, idx) => (included[idx] ? acc + cur : acc), 0);
}

// 다른 풀이
function solution(a, d, included) {
  return included.reduce((acc, flag, i) => {
    return flag ? acc + a + d * i : acc;
  }, 0);
}
