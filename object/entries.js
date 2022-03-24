/* Object.entries
객체의 모든 멤버 변수 값이 들어있는 2차원 배열로 리턴한다.
*/

let person = {name : "홍길동", age : 16};
console.log(Object.entries(person));

let per = {name : "홍길동", age : 16};
for(let [key,value] of Object.entries(per))
    console.log("%s : %s",key,value);