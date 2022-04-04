// operator
let a = 3;
let b = "3";
console.log(a==b) // true
console.log(a===b) // false
// type 
console.log(typeof(a)) // number
// console.log(typeof(a) == number) // false
console.log(typeof(a) == "number") // true
// String -> number / number -> String
console.log(parseInt(b)); // 3
console.log(a.toString()); // "3"
// 자릿수 설정
let c = 3.1452;
console.log(c.toFixed(3)); // 3.145
let d = [1,2,3,4,5,6];
let [e1,e2, ...e3] = d;
console.log(e1+" "+e2+" "+e3) // 1 / 2 / 3,4,5,6
console.log(e3); // [3,4,5,6]
// swap
[a,b] = [5,6];
console.log(a+" "+b); // 5 / 6
[a,b] = [b,a];
console.log(a+" "+b); // 6 / 5
let a1 = [];
[a1[0],a1[1]] = [3,4];
console.log(a1[0]+" "+a1[1]); // 3 / 4
[a1[0],a1[1]] = [a1[1],a1[0]];
console.log(a1[0]+" "+a1[1]); // 4 / 3
// splice(입할_위치, 삭제할_항목_수, 삽입할_값_목록)
let a2 = [0,1,2];
a2.splice(1,0,2);
console.log(a2); // [0,2,1,2]
// slice(시작_위치, 끝_위치)
console.log(a2.slice(0,2)); // [0,2]
let a3 = a2.slice(0); // [0,2,1,2] 모두 복제
// push / pop (맨 뒤 추가 / 맨 뒤 삭제)
// unshift / shift (맨 앞 추가 / 맨 앞 삭제)


