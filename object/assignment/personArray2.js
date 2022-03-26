let person1 = {};
for(let i = 0;i<10;i++){
    person1[i] = {name : "홍길동", age : 16+i};
}
console.log(person1)

let person2 = Object.assign({ },person1);
console.log(person2);
