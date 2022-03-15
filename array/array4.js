// 배열은 자동 확장이 가능하다.
let a = [3]; 
console.log("최초 크기 : " + a.length); // 이 때, 크기는 1이다.
a[5] = "abc";
console.log("새 크기 : " + a.length); // 이 때, 크기는 a[5]까지 확장시켰으므로 6이다.
for(let i = 0;i<a.length;i++){
    console.log(a[i]);
}
// 모든 배열은 객체이다.
let b = [1,2,3];
let c = ["one","two","three"];
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
