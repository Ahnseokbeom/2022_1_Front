let a = [3,4,5];
let [a1, a2, a3] = a;
console.log("%d %d %d",a1,a2,a3);
[a1,a2] = a;
console.log("%d %d",a1,a2);

let b = [3,4,5,6,7,8];
let [b1,b2,...b3] = b;
console.log("%d %d",b1,b2); // 3,4
console.log(b3); // [5,6,7,8]
