let persons = [ 
  { name: "홍길동", age: 16 }, 
  { name: "임꺽정", age: 18 }, 
  { name: "전우치", age: 19 } 
];
console.log(persons);

persons[2] = persons[1];
persons[1].age = 20;
console.log(persons);
/* 이렇게 되면 perosns[2]는 사라지고
1과 2가 모두 1을 보고 있기 때문에 1 2의 나이 모두 20으로 변한다.
*/

let person = [
    {name : "홍길동", age : 16},
    { name: "임꺽정", age: 18 }
];
console.log(person);
person = [
    {name : "전우치", age : 19},
    {name : "이몸룡", age : 16},
];
console.log(person);
