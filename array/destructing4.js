let i = 3, j = 4;
let k = [5,6,7];
let a1 = [i,j,k];
console.log(a1); //[3,4,[5,6,7]]
let a2 = [i,j,...k];
console.log(a2); // [3,4,5,6,7]
// 이 부분은 몰라도 됨 / spreading operator 라고 함