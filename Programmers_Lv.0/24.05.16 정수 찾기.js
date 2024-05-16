// 문제 설명
// 정수 리스트 num_list와 찾으려는 정수 n이 주어질 때, num_list안에 n이 있으면 1을 없으면 0을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 3 ≤ num_list의 길이 ≤ 100
// 1 ≤ num_list의 원소 ≤ 100
// 1 ≤ n ≤ 100

function solution(num_list, n) {
  if (num_list.includes(n)) {
    return 1;
  } else {
    return 0;
  }
}

// 다른 풀이
const solution = (l, n) => +l.includes(n);
