let person = {name : "홍길동", age : 16};
let info = {age : 20, department : "소프", year : 2};

Object.assign(person,info);
/* Object.assign(to, from);
from객체의 모든 멤버 변수 값을, to 객체에 복사한다.
즉, info를 모두 person의 정보도 포함하여 복사한다는 뜻
*/
console.log(person);
// 객체 복제
let person1 = {name : "홍길동", age : 16};
let person2 = Object.assign({ },person1);
console.log(person2);

