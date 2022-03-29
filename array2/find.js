let persons = [ 
  { name: "홍길동", age: 16 }, 
  { name: "임꺽정", age: 18 }, 
  { name: "전우치", age: 19 }
];
let person = persons.find(p =>p.age == 18);
console.log(person);

let index = persons.findIndex(p => p.age == 18); // 1이 나옴 인덱스는 0번부터 시작이므로 2번째인 1이 나옴
console.log(index);
