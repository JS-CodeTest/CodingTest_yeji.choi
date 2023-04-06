// 문제 설명
// 정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ n ≤ 100

function solution(n) {
  let answer = [];
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 1) {
      answer.push(i);
    }
  }
  return answer;
}
// push로 배열에 값을 추가했습니다.
// 홀수는 2로 나누었을때 나머지가 1이 됩니다.
// 1을 2로 나누면 몫은 0, 나머지가 1이 됩니다.

// 다른 풀이
function solution(n) {
  let answer = [];
  for (let i = 1; i <= n; i += 2) answer.push(i);
  return answer;
}
// i를 1부터 i += 2 값씩 증가시켰습니다.
