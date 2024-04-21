// 문제 설명
// 첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 0 <numer1, denom1, numer2, denom2 < 1,000

function solution(numer1, denom1, numer2, denom2) {
    const sumdenom = denom1 * denom2;
    const sumnumer = numer1 * denom2 + numer2 * denom1;
    const gcd = findGcd(sumdenom, sumnumer);
    return [ sumnumer /gcd, sumdenom /gcd];
}
function findGcd(a,b){
    return b === 0 ? a: findGcd(b, a % b);
}