// 문제 설명
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 0 ≤ numbers의 원소 ≤ 1,000
// 1 ≤ numbers의 길이 ≤ 100
// 정답의 소수 부분이 .0 또는 .5인 경우만 입력으로 주어집니다.

function solution(numbers) {
  return (
    numbers.reduce(
      (accumulator, currentNumber) => accumulator + currentNumber
    ) / numbers.length
  );
}

// reduce를 아직 완벽하게 이해하진 못했지만 어제 호준강사님이 강의 해주신거라 구글링하면서 풀어보았습니다.
