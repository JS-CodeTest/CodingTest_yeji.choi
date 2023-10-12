// 문제 설명
// 문자열 str1, str2가 매개변수로 주어집니다. str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ str1의 길이 ≤ 100
// 1 ≤ str2의 길이 ≤ 100
// 문자열은 알파벳 대문자, 소문자, 숫자로 구성되어 있습니다.

function solution(str1, str2) {
    let answer = 0;
    answer = str1.includes(str2) ? 1:2;
    return answer;
}
// includes는 배열에 특정 요소가 존재하는지 확인하는 메소드이다. (결과값 : true/false)

// 다른 풀이 
function solution(str1,str2) {
    if (str1.indexOf(str2) === -1) {
        return 2
    }
    return 1
}
// indexOf는 주어지 키워드 값을 문자열에서 검색하여, 일치하는 첫번째 인덱스 값을 반환한다. 일치하는 값을 찾지 못하면 -1을 반환한다.

// 다른 풀이 
function solution(str1, str2) {
    let answer = 0; 
    answer = str1.split(str2).length >1 ? 1:2;
    return answer;
}
