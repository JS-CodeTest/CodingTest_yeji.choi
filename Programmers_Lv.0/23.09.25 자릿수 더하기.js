// 문제 설명
// 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요

// 제한사항
// 0 ≤ n ≤ 1,000,000

function solution(n) {
  let answer = 0;
  let m = String(n);

  for (let i = 0; i < m.length; i++);
  answer += parseInt(m[i]);
  return answer;
}
// 숫자에는 .length가 적용되지 않기 때문에 String으로 변환하였다. 문자가 아닌 숫자로 결과값을 반환하기 위해 parseInt를 사용했다.
