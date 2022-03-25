let person = {name : "홍길동", age : 16};

person[0] = "호형호제";
person[1] = "도술";
console.log(person);
console.log(person[0]);

let per = {name : "홍길동", age : 16, 1:"도술", 0 : "호형호제"};
console.log(per);
console.log(per[0]);

let person1 = {name : "홍길동", age : 16, 1:"도술", 0 : "호형호제"};
for(let key in person1){
    console.log("%s : %s",key,person1[key]);
}



