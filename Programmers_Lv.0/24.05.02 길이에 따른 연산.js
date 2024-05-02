// 문제 설명
// 정수가 담긴 리스트 num_list가 주어질 때, 리스트의 길이가 11 이상이면 리스트에 있는 모든 원소의 합을 10 이하이면 모든 원소의 곱을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 2 ≤ num_list의 길이 ≤ 20
// 1 ≤ num_list의 원소 ≤ 9
// num_list의 원소를 모두 곱했을 때 2,147,483,647를 넘는 입력은 주어지지 않습니다.

function solution(num_list) {
    const list = num_list;
    if(list.length >=11){
        return list.reduce((a,b) => a +b ,0)
    } else {
        return list.reduce((a,b)=> a*b , 1)
    }
  }

  // 다른 풀이 
  const solution=n=>n.reduce((a,v)=>n.length>10?a+v:a*v)

