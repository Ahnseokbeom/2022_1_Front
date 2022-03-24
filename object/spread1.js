let person = {name : "홍길동", age : 16};
let {name, age} = person;
console.log("%s %d",name,age);

let per = {name1 : "홍길동", age1 : 16, english : 90, math : 85, history : 95};
let {name1, age1,...scores} = per;
console.log("%s %d",name1,age1);
console.log(scores);
