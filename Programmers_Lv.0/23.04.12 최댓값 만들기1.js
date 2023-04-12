// 문제 설명
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 0 ≤ numbers의 원소 ≤ 10,000
// 2 ≤ numbers의 길이 ≤ 100

function solution(numbers) {
  numbers.sort((a, b) => b - a);
  const max = numbers.splice(0, 2);
  return max[0] * max[1];
}
// sort를 이용하여 내림차순으로 정렬합니다.
// splice로 맨 처음 두 숫자만 추출합니다.
// 오름차순 : sort((a, b) => a - b)

// 다른 풀이
function solution(numbers) {
  numbers.sort((a, b) => b - a);
  return numbers[0] * numbers[1];
}
// splice를 사용하지 않고 바로 배열의 맨 처음 두 숫자만 곱할 수 있습니다.
