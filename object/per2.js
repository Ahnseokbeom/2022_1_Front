function createPerson(s,i){
    return {name : s, age : i};
}

let per1 = createPerson("홍길동",16);
let per2 = createPerson("임꺽정",20);
console.log(per1);
console.log(per2);

function createP(){
    return {name : 홍길동, age : 16};
}

let person1 = createP();
let person2 = createP();
person1.name = "임꺽정";
person2.age = 20;
console.log(person1);
console.log(preson2);
