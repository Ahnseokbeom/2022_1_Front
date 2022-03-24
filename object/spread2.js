// 다 동일한 값이 나온다
let person1 = {name : "홍길동", age : 16};
console.log(person1);

let name = "홍길동";
let age = 16;

let person2 = {name : name, age : age};
console.log(person2);

let person3 = {name,age};
console.log(person3);

let name1 = "홍길동";
let age1 = 16;
let scores = {english : 90, math : 85, history : 95};

let per1 = {name1,age1,scores};
console.log(per1);

let per2 = {name1,age1,...scores};
console.log(per2);

