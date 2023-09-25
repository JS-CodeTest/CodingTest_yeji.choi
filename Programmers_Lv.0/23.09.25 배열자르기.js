// 문제 설명
// 정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때, numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 2 ≤ numbers의 길이 ≤ 30
// 0 ≤ numbers의 원소 ≤ 1,000
// 0 ≤num1 < num2 < numbers의 길이

function solution(numbers, num1, num2) {
  let answer = [];
  answer = numbers.slice(num1, num2 + 1);
  return answer;
}
// splice도 사용 가능하다. slice는 원본 배열이 변형되지 않지만 splice는 원본이 바뀐다.

// 다른 풀이
function solution(numbers, num1, num2) {
  let answer = [];
  for (let i = num1; i < num2 + 1; i++) {
    answer.push(numbers[i]);
  }
  return answer;
}
// 반복문을 사용했습니다.
