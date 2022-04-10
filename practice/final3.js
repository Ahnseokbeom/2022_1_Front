function cloneObject(obj) { // X
    
}
let p1 = { name: '홍길동',age: 16};
let p2 = cloneObject(p1); // p1 객체를 복제하여 p2 객체 생성 
p1.name = "임꺽정";
p1.age = 20; // p1 객체의 속성 값 변경 
console.log(p2); // p2 객체의 속성은 변경되지 않는다.
let r1 = { width: 11,height: 22};
let r2 = cloneObject(r1); //r1 객체를 복제하여 r2 객체 생성 
r1.width = 0;
r1.height = 0; // r1 객체의 속성 값 변경 
console.log(r2); // r2 객체의 속성은 변경되지 않는다
// 이 함수는 파라미터 객체를 복제(clone)해서 리턴해야 한다.
// 출력 { name: '홍길동', age: 16 } { width: 11, height: 22 }
function countProperty(obj) { // X
    return obj.length;
}
p1 = {name: '홍길동',age: 16};
console.log(countProperty(p1));
r1 = {x: 10,y: 20,width: 30,height: 40};
console.log(countProperty(r1));
// 이 함수는 파라미터 객체의 파라미터의 수를 리턴한다. (멤버 변수의 수)
// 출력 2 4
function countEven(a) {
    return a.filter(num => num%2==0).length;
}
let a = [7,1,9,4,15,23,2,11,5,12,3];
console.log(countEven(a))
// 이 함수의 파라미터는 숫자 배열이다. 이 배열에 들어있는 짝수의 수를 리턴해야 한다. For 사용 X
// 출력 3
function sortPersons(persons) { // X
    
}
let persons = [
    {name: "홍길동",age: 16}, 
    {name: "연흥부",age: 31},
    {name: "임꺽정",age: 18}, 
    {name: "전우치",age: 19}, 
    {name: "이몽룡",age: 17}
];
sortPersons(persons);
console.log(persons);
//이 함수는 persons 객체 배열을 이름 내림차순으로 정렬해야 한다.
// 출력 [ { name: '홍길동', age: 16 }, { name: '전우치', age: 19 }, { name: '임꺽정', age: 18 }, { name: '이몽룡', age: 17 }, { name: '연흥부', age: 31 } ]