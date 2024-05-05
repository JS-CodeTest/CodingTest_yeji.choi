// 문제 설명
// 정수 리스트 num_list가 주어질 때, 첫 번째로 나오는 음수의 인덱스를 return하도록 solution 함수를 완성해주세요. 음수가 없다면 -1을 return합니다.

// 제한사항
// 5 ≤ num_list의 길이 ≤ 100
// -10 ≤ num_list의 원소 ≤ 100

function solution(num_list) {
  const find = num_list.findIndex((a) => a < 0);
  if (find >= 0) {
    return find;
  } else {
    return -1;
  }
}

// 다른 풀이
const solution = (num_list) => num_list.findIndex((v) => v < 0);
