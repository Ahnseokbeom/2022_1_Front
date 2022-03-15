let a = [0,1,2];
// 배열.splice(삽입할_위치, 삭제할_항목_수, 삽입할_값_목록)
a.splice(1,0,"a"); // [0,'a',1,2]로 변경됨
console.log(a);
let b = [0,1,2];
b.splice(1,0,"a","b"); // [0,'a','b',1,2]로 변경됨
console.log(b);
