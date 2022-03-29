let a1 = [0,1,2,3];
let a2 = [0,2,4,6];
let isEven = (i) => i%2==0;
// every - all true 일 때만 true 아니면 false
console.log(a1.every(isEven));
console.log(a2.every(isEven));