let per1 = {name : "홍길동", age : 16};
let per2 = {name : "홍길동", age : 16};
let p = per1;

console.log(per1 == per2); // false
console.log(per1 == p); // true
/* per1,2 변수를 ==으로 비교할 시 
동일한 객체를 참조하는지를 비교한다
즉, per1과 p가 같은 홍길동 : 16을 참조하고,
per2는 다른 홍길동 : 16을 참조하므로 Flase이다.
*/

// 기본 자료형은 == 비교시 값이 같은지를 비교한다
let s1 = "hello world";
let s2 = "hello"+"world";
console.log(s1==s2); // true

let person1 = {name : "홍길동", age : 16};
let person2 = {name : "홍길동", age : 16};

function equals(p1, p2){
    return p1.name == p2.name && 
    p1.age == p2.age;
}
console.log(equals(person1,person2)); // true
// 객체의 내부 값을 비교하려면 위와 같이 함수로 구현해야 한다.