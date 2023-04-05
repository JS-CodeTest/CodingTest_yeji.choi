// 문제 설명
// 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 0 < n ≤ 1000

function solution(n) {
  var answer = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      answer += i;
    }
  }
  return answer;
}

// for 반복문 : i가 n보다 작거나 같을 동안 증가하면서 반복
// if문 i를 2로 나눈 나머지가 0일 경우(2의 배수 = 짝수) i를 answer에 더함
