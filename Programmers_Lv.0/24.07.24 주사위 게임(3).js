// 문제 설명
// 1부터 6까지 숫자가 적힌 주사위가 네 개 있습니다. 네 주사위를 굴렸을 때 나온 숫자에 따라 다음과 같은 점수를 얻습니다.
// 네 주사위에서 나온 숫자가 모두 p로 같다면 1111 × p점을 얻습니다.
// 세 주사위에서 나온 숫자가 p로 같고 나머지 다른 주사위에서 나온 숫자가 q(p ≠ q)라면 (10 × p + q)2 점을 얻습니다.
// 주사위가 두 개씩 같은 값이 나오고, 나온 숫자를 각각 p, q(p ≠ q)라고 한다면 (p + q) × |p - q|점을 얻습니다.
// 어느 두 주사위에서 나온 숫자가 p로 같고 나머지 두 주사위에서 나온 숫자가 각각 p와 다른 q, r(q ≠ r)이라면 q × r점을 얻습니다.
// 네 주사위에 적힌 숫자가 모두 다르다면 나온 숫자 중 가장 작은 숫자 만큼의 점수를 얻습니다.
// 네 주사위를 굴렸을 때 나온 숫자가 정수 매개변수 a, b, c, d로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.

// 제한사항
// a, b, c, d는 1 이상 6 이하의 정수입니다.

function solution(a, b, c, d) {
  const nums = [a, b, c, d];
  const appear = {};

  for (let i = 0; i < 4; i++) {
    const num = nums[i];
    appear[num] = (appear[num] || 0) + 1;
  }

  const count = Math.max(...Object.values(appear));
  const entries = Object.entries(appear).sort((a, b) => a[1] - b[1]);

  let answer = 0;
  switch (count) {
    case 4:
      answer = 1111 * a;
      break;
    case 3:
      answer = (10 * Number(entries[1][0]) + Number(entries[0][0])) ** 2;
      break;
    case 2:
      if (entries.length === 2) {
        answer =
          (Number(entries[1][0]) + Number(entries[0][0])) *
          Math.abs(Number(entries[1][0]) - Number(entries[0][0]));
      }
      if (entries.length === 3) {
        const newEntries = entries.filter((el) => el[1] === 1);
        answer = Number(newEntries[1][0]) * Number(newEntries[0][0]);
      }
      break;
    case 1:
      answer = Math.min(...nums);
      break;
  }

  return answer;
}

// 다른 풀이
function solution(a, b, c, d) {
  if (a === b && a === c && a === d) return 1111 * a;

  if (a === b && a === c) return (10 * a + d) ** 2;
  if (a === b && a === d) return (10 * a + c) ** 2;
  if (a === c && a === d) return (10 * a + b) ** 2;
  if (b === c && b === d) return (10 * b + a) ** 2;

  if (a === b && c === d) return (a + c) * Math.abs(a - c);
  if (a === c && b === d) return (a + b) * Math.abs(a - b);
  if (a === d && b === c) return (a + b) * Math.abs(a - b);

  if (a === b) return c * d;
  if (a === c) return b * d;
  if (a === d) return b * c;
  if (b === c) return a * d;
  if (b === d) return a * c;
  if (c === d) return a * b;

  return Math.min(a, b, c, d);
}
