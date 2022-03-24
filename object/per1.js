let person = { name: "홍길동", age: 16 }; 
console.log(person);
console.log(person.name); 
console.log(person.age);

let person1 = {};
// person1.name == person1["name"] 같은 의미이다.
person1.name = "홍길동"; 
//person1["name"] = "홍길동";
person1.age = 16;
//person1["age"] = 16;
console.log(person1); 
// 그냥 추가하면 됨
let person2 = { name: "임꺽정" }; 
person2.age = 19; 
person2.email = "dad@naver.com";
console.log(person2);

