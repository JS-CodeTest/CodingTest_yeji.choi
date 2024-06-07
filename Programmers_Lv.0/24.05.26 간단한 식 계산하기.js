// 문제 설명
// 문자열 binomial이 매개변수로 주어집니다. binomial은 "a op b" 형태의 이항식이고 a와 b는 음이 아닌 정수, op는 '+', '-', '*' 중 하나입니다. 주어진 식을 계산한 정수를 return 하는 solution 함수를 작성해 주세요.

// 제한사항
// 0 ≤ a, b ≤ 40,000
// 0을 제외하고 a, b는 0으로 시작하지 않습니다.

const solution = (binomial) => {
  const [num1, op, num2] = binomial.split(" ");
  switch (op) {
    case "+":
      return Number(num1) + Number(num2);
    case "-":
      return Number(num1) - Number(num2);
    case "*":
      return Number(num1) * Number(num2);
  }
};

// 다른 풀이
function solution(binomial) {
  var answer = 0;
  const s = binomial.split(" ");
  const n1 = parseInt(s[0]);
  const n2 = parseInt(s[2]);

  switch (s[1]) {
    case "+":
      return n1 + n2;
    case "-":
      return n1 - n2;
    case "*":
      return n1 * n2;
  }
}

// 다른 풀이 2
const ops = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
};

function solution(binomial) {
  const [a, op, b] = binomial.split(" ");
  return ops[op](+a, +b);
}
