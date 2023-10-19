// 문제 설명
// 정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 1 ≤ array의 길이 ≤ 100
// 0 ≤ array 원소 ≤ 1,000
// array에 중복된 숫자는 없습니다.

const solution = array => [Math.max(...array), array.indexOf(Math.max(...array))]

// 다른 풀이 
function solution(numbers) {
    let answer = numbers.map((num) => num.toString()).sort((a,b) => (b+a)-(a+b)).join("");
    return answer[0]==="0" ? "0" : answer ;
}