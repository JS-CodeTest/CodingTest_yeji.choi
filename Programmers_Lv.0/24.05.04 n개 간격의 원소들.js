// 문제 설명
// 정수 리스트 num_list와 정수 n이 주어질 때, num_list의 첫 번째 원소부터 마지막 원소까지 n개 간격으로 저장되어있는 원소들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 5 ≤ num_list의 길이 ≤ 20
// 1 ≤ num_list의 원소 ≤ 9
// 1 ≤ n ≤ 4

function solution(num_list, n) {
  let list = [];
  for (let i = 0; i < num_list.length; i += n) {
    list.push(num_list[i]);
  }
  return list;
}

// 다른 풀이
// _ : 암묵적으로 사용하지 않는 매개변수라는 의미
const solution = (num_list, n) => num_list.filter((_, i) => !(i % n));
