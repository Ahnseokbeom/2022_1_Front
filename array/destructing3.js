// 배열 swap
let a = [];
a[0] = 3;
a[1] = 4;
console.log(a); // [3,4]
let temp = a[0];
a[0] = a[1];
a[1] = temp;
console.log(a); // [4,3]

let b = [];
[b[0],b[1]] = [3,4];
console.log(b);
[b[0],b[1]] = [b[1],b[0]];
console.log(b);
