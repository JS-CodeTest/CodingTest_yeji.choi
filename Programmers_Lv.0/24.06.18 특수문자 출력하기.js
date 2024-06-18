// 문제 설명
// 다음과 같이 출력하도록 코드를 작성해 주세요.

// 출력 예시
// !@#$%^&*(\'"<>?:;

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("close", function () {
  console.log("!@#$%^&*(\\'\"<>?:;");
});
// 백슬래시와 작은 따옴표를 붙여서 입력하면 백슬래시가 특수문자화된다.
// 백슬래시를 연속으로 두 번 사용하고 이를 백틱으로 감싸주어 문제를 해결할 수 있다.
