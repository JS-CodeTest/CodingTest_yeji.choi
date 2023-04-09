// 문제 설명
// 머쓱이는 학교에서 키 순으로 줄을 설 때 몇 번째로 서야 하는지 궁금해졌습니다. 머쓱이네 반 친구들의 키가 담긴 정수 배열 array와 머쓱이의 키 height가 매개변수로 주어질 때, 머쓱이보다 키 큰 사람 수를 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 1 ≤ array의 길이 ≤ 100
// 1 ≤ height ≤ 200
// 1 ≤ array의 원소 ≤ 200

function solution(array, height) {
  let answer = array.filter((a) => a > height).length;
  return answer;
}
// filter()는 주어진 함수의 조건을 만족하는 모든 요소를 모아 새로운 배열로 반환합니다.

// 나의 오답
// array.filter(a => a > height) 뒤에 .length를 빼먹었습니다. 머쓱이 보다 키 큰 사람이 누구누군지 묻는 것이 아니라 총 몇 명인지 묻는 것이기 때문에 .length가 필요합니다.

// 다른 풀이
function solution(array, height) {
  var answer = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > height) {
      answer++;
    }
  }
  return answer;
}

// 다른 풀이 2
// 삼항 연산자를 사용했습니다. for of 문으로 배열을 순회하며 height보다 큰 값이 있으면 answer에 1을 더하는 (+= 1) 풀이법입니다.
function solution(array, height) {
  let answer = 0;
  for (i of array) i > height ? (answer += 1) : answer;
  return answer;
}
