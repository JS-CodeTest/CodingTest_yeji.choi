// 문제 설명
// 정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 1 ≤ array의 길이 ≤ 100
// 0 ≤ array의 원소 ≤ 1,000
// 0 ≤ n ≤ 1,000

function solution(array, n) {
  let answer = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == n) {
      answer += 1;
    }
  }
  return answer;
}
// 처음으로 구글링 없이 해결했습니다... (사칙연산제외)
// answer += 1 은 answer++로 표현할 수도 있습니다.

// 다른 풀이
function solution(array, n) {
  return array.filter((v) => v === n).length;
}
