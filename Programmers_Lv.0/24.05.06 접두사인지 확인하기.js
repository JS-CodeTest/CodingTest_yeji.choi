// 문제 설명

// 어떤 문자열에 대해서 접두사는 특정 인덱스까지의 문자열을 의미합니다. 예를 들어, "banana"의 모든 접두사는 "b", "ba", "ban", "bana", "banan", "banana"입니다.
// 문자열 my_string과 is_prefix가 주어질 때, is_prefix가 my_string의 접두사라면 1을, 아니면 0을 return 하는 solution 함수를 작성해 주세요.

// 제한사항
// 1 ≤ my_string의 길이 ≤ 100
// 1 ≤ is_prefix의 길이 ≤ 100
// my_string과 is_prefix는 영소문자로만 이루어져 있습니다.

function solution(my_string, is_prefix) {
  if (my_string.startsWith(is_prefix)) {
    return 1;
  } else {
    return 0;
  }
}

// 다른 풀이
function solution(my_string, is_prefix) {
  return my_string.slice(0, is_prefix.length) === is_prefix ? 1 : 0;
}

// 다른 풀이 2
// boolean 앞에 + 해주면 true는 1, false는 0으로 변환한다.
// 단항 더하기 연산자(+)는 피연산자 앞에 위치하며 피연산자를 평가하지만, 피연산자가 숫자가 아니라면 숫자로 변환한다.
function solution(my_string, is_prefix) {
  return +my_string.startsWith(is_prefix);
}
