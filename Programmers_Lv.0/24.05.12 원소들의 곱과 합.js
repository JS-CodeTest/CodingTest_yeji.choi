// 문제 설명
// 정수가 담긴 리스트 num_list가 주어질 때, 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 2 ≤ num_list의 길이 ≤ 10
// 1 ≤ num_list의 원소 ≤ 9

function solution(num_list) {
  let add = 0;
  let mul = 1;
  for (let i = 0; i < num_list.length; i++) {
    mul *= num_list[i];
    add += num_list[i];
  }
  add = add * add;
  if (mul < add) {
    return 1;
  }
  return 0;
}

// 다른 풀이
function solution(num_list) {
  let mul = num_list.reduce((a, c) => {
    return a * c;
  }, 1);
  let sum = num_list.reduce((a, c) => {
    return a + c;
  }, 0);
  return mul < sum * sum ? 1 : 0;
}
