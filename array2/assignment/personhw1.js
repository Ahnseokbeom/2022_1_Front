// 이 배열을 age 내림차순으로 정렬하여 출력하는 코드를 구현하라.
let persons = [
  { name: "홍길동", age: 16 },
  { name: "임꺽정", age: 18 },
  { name: "전우치", age: 19 }
];
console.log(persons.sort((p1,p2) => p2.age-p1.age));

//위 persons 배열에서 age 최대값 사람을 찾아서 출력하는 코드를 구현하라.
// reduce 메소드를 사용하여 구현하라.

let max = persons.reduce((a,b) => a.age>b.age? a:b);
console.log(max);
console.log(max.age);
console.log(max.name);
